//版权 北京智能社©, 保留所有权利
window.onload = function(){
	var oC = document.getElementById("c1");
	var gd = oC.getContext("2d");
  	
	loadImages({
		fish1:"img/fish1.png",
		fish2:"img/fish2.png",
		fish3:"img/fish3.png",
		fish4:"img/fish4.png",
		fish5:"img/fish5.png",
		bottom:"img/bottom.png",
		bullet:"img/bullet.png",
		cannon1:"img/cannon1.png",
		cannon2:"img/cannon2.png",
		cannon3:"img/cannon3.png",
		cannon4:"img/cannon4.png",
		cannon5:"img/cannon5.png",
		cannon6:"img/cannon6.png",
		cannon7:"img/cannon7.png",
		coinAni1:"img/coinAni1.png",
		coinAni2:"img/coinAni2.png",
		web:"img/web.png"
	},function(imgs){
		
		
		 
		 //炮台
		 var bottom = new Sprite(imgs.bottom);
		 bottom.w = 765;
		 bottom.h = 70;
		 bottom.x = oC.width/2;
		 bottom.y = oC.height - bottom.h/2;
		 
		 //炮筒
		 var cannon = new Cannon(imgs,7);
		 cannon.w = 74;
		 cannon.h = 94;
		 cannon.x = 450;
		 cannon.y = 566;
		 
		 oC.onmousemove = function(ev){
			 
			 var x = ev.clientX - cannon.x - oC.offsetLeft;
			 var y = cannon.y + oC.offsetTop - ev.clientY;
			 var a = Math.atan2(y,x);
			 
			 cannon.rotate = 90 - a2d(a);
				 
		 };
		 
		 var aBullet = [];
		 oC.onclick = function(){
			var bullet = new Bullet(imgs.bullet,7); 
			bullet.x = cannon.x;
			bullet.y = cannon.y;
			bullet.rotate = cannon.rotate;	
			aBullet.push(bullet); 
		 };
		 //好多鱼
		 var aFish = [];
		 setInterval(function(){
			  var f = new Fish(imgs,rnd(1,6));
			  aFish.push(f);
			  f.y = rnd(100,oC.height-100);
			  if(Math.random() < 0.5){
				  //左边
				  f.x = -200;
				  f.rotate = rnd(60,120);
		      } else {
				  //右边
				  f.x = oC.width + 200;
				  f.rotate = rnd(-60,-120) 
			  }
			  
		 },200);
		 
		 
		 //存金币
		 var aCoin = [];
		 //存死鱼
		 var aDieFish = [];
		 //存网
		 var aWeb = [];
		 
		 setInterval(function(){
			 gd.clearRect(0,0,oC.width,oC.height);
			 
			 
			 for(var i = 0; i　< aFish.length; i++){
				 aFish[i].draw(gd);
				 aFish[i].move();
			 }
			 
			 bottom.draw(gd);
			 cannon.draw(gd);
			 
			 for(var i = 0; i　< aBullet.length; i++){
				 aBullet[i].draw(gd);
				 aBullet[i].move();
			 }
			 
			 //金币
			 for(var i = 0; i　< aCoin.length; i++){
				 aCoin[i].draw(gd);
				 aCoin[i].move();
			 }
			 //死鱼
			 for(var i = 0; i　< aDieFish.length; i++){
				 aDieFish[i].draw(gd);
				 aDieFish[i].move();
				 
				 setTimeout(function(){
					aDieFish.shift();	 
				 },300);
			 }
			 //网
			 for(var i = 0; i　< aWeb.length; i++){
				 aWeb[i].draw(gd);
				 aWeb[i].scale+= 0.1;
				 
				 if(aWeb[i].scale > 1.2){
					 aWeb[i].scale = 1;
					 aWeb.splice(i--,1);
				 }
			 }
			 
			 
			 //碰撞检测
			for(var i = 0; i　< aBullet.length; i++){
				for(var j = 0; j　< aFish.length; j++){
				 if(aBullet[i].collTest(aFish[j])){
					 var x = aFish[j].x;
					 var y = aFish[j].y;
					 var type = aFish[j].type;
					 var rotate = aFish[j].rotate;
					 //鱼消失 
					 aFish.splice(j--,1);
					 aBullet.splice(i--,1);
					 
					 //生成金币
					 var coin = new Coin(imgs,type);
					 coin.x = x;
					 coin.y = y;
					 aCoin.push(coin);
					 
					 //死于
					 var f = new DieFish(imgs,type);
					 f.x = x;
					 f.y = y;
					 f.rotate = rotate;
					 aDieFish.push(f);
					 
					 var web = new Web(imgs.web,type);
					 web.x = x;
					 web.y = y;
					 aWeb.push(web);
				 }
				}
			 }
		 },30);
		 
	});
};