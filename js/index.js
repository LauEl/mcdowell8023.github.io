// 主页js
function whRem(rem){		//计算rem到px
	var f_size=getStyle(document.documentElement,'fontSize');
	return parseInt(f_size)*rem;
}

	function getpost(obj){
		var l=0;
		var t=0; 
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:l,top:t}
	}

window.onload=function(){
	
	var Ch=document.documentElement.clientHeight;
	var Cw=document.documentElement.clientWidth;

	var oHeader=document.getElementById('header');
	var oMain=document.getElementById('main');
	var aM_page=oMain.children;
	var oM_page=document.getElementById('m_page');
	var aMpage=oM_page.children;

	//full屏高度；
	for (var i = 0; i < aM_page.length; i++) {
		aM_page[i].style.height=Ch+'px';
	}

	//full屏滚动及切换
	var iNow=0;
	addWheel( oMain,function(dir){
			
		if (dir) {
			iNow++;
			if (iNow==aM_page.length) {
				//iNow=0;
				iNow=aM_page.length-1;	
			} 
		} else {
			iNow--;
			if (iNow==-1) {
				//iNow=aM_page.length-1;
				iNow=0;	
			} 
		}
		tick();
	})
	for(var i=0;i<aMpage.length;i++){
		if(aMpage[i].className=='on'){
			oMain.style.top=-aM_page[i].offsetHeight*i+'px';

		}
		aMpage[i].index=i;
		aMpage[i].onclick=function(){
			iNow=this.index;
		tick();
		};
	}
	function tick(){
	//oMain.style.top=-Ch*iNow+'px';
		
		for (var i = 0; i < aMpage.length; i++) {
	  	aMpage[i].className='';
	  }
	  aMpage[iNow].className='on';	
	  startMove(oMain,{top:-Ch*iNow});

	  	nav();
	}

//导航动态
var oNavbar=document.getElementById('navbar');
	
	nav();
	function nav(){
	  	if (!iNow) {
		oNavbar.style.display='none';
		 startMove(oHeader,{top:0},{duration:2000});

		}else{
			startMove(oHeader,{top:-100});
		 	oNavbar.style.display='block';
		}
	}

	oNavbar.onclick=function(){
		if (oHeader.offsetTop!=0) {
			startMove(oHeader,{top:0},{duration:2000});
			oNavbar.style.display='none';
		}else{
			startMove(oHeader,{top:-100});
		}
	}
	
	 var oNav_btn=document.getElementById('nav_btn');
	 var oNav_m=document.getElementById('nav_m');
	 oNav_btn.onclick=function(){
	 	if(oNav_m.style.display=='block'){
	 		oNav_m.style.display='none';
	 	}else{
			oNav_m.style.display='block';
	 	}
	 	
	 }


	
	var oNav=document.getElementById('nav');
	var aNavbtn=oNav.children;
	var oNav_bor=oNav.children[aNavbtn.length-1];
	var Nhegiht=aNavbtn[0].offsetHeight;
		for (var i = 0; i < aNavbtn.length-1; i++) {
			aNavbtn[i].onmouseover=function(){
				var oA=this.children[0];
				var oP=this.children[1];

				oNav_bor.style.width=this.offsetWidth+'px';
				startMove(oNav_bor,{left:this.offsetLeft},{duration:300}) 
				
				 startMove(oA,{top:0})
				 startMove(oP,{top:Nhegiht})
			}
			aNavbtn[i].onmouseout=function(){
				var oA=this.children[0];
				var oP=this.children[1];
				doMove(oNav_bor,{left:0}) 
				
				 startMove(oP,{top:0})
				 startMove(oA,{top:-Nhegiht})
				 
			}
		}

// 第一屏轮播图
		var oPbanner=document.getElementById('playbanner') ;
		var aWelcome=oPbanner.children;
		var oPlaybtn=document.getElementById('playbtn') ;
		var aPlaybtn=oPlaybtn.getElementsByTagName('span');

		//轮播图页面设置宽高
		
		// for(var i=0; i<aWelcome.length; i++){
		// 	aWelcome[i].style.width=oPbanner.parentNode.offsetWidth+'px';
		// }
		oPbanner.style.width=aWelcome[0].offsetWidth*aWelcome.length+'px';
		//oPbanner.style.height=Ch-100+'px';

		var icout=0;
		//轮播图播放
		function next(){
				for(var i=0; i<aPlaybtn.length; i++){
				aPlaybtn[i].style.width=0;
			}
			startMove(aPlaybtn[icout],{width:60},{duration:2000,complete:function(){
				icout++;

				if (icout==aPlaybtn.length) {
					icout=0;
				} 
				startMove(oPbanner,{left:-icout*aWelcome[0].offsetWidth},{duration:1000,complete:next})
				//console.log(icout*aWelcome[0].offsetWidth)
			}})
		}
		next();


// 二平选项卡
		var oInfo_title=document.getElementById('info_title');
		var aInfo_title=oInfo_title.children;
		var oTab=document.getElementById('tab');

		var aTabul=oTab.getElementsByTagName('ul');
		
		var oInfo_titlebg=oInfo_title.children[oInfo_title.children.length-1];
			var zindx=0;
		for (var i = 0; i < aTabul.length; i++) {
			aInfo_title[i].index=i;
			aInfo_title[i].onmouseover=function(){
				zindx++;
				var oA=this.children[0];
				for(var i=0; i<aTabul.length; i++){	
					startMove(aTabul[i],{opacity:0},{duration:2000}) ;
					//aTabul[this.index].style.zIndex=zindx;
				}
				doMove(oInfo_titlebg,{top:this.offsetTop},{duration:300}) ;
				oA.className='aColor';
				
				startMove(aTabul[this.index],{opacity:1},{duration:2000}) ;
				aTabul[this.index].style.zIndex=zindx;
				//console.log(zindx,this.index,aTabul[this.index])
			}
			aInfo_title[i].onmouseout=function(){
				var oA=this.children[0];
				oA.className='';
			}
			through(aTabul[i]);
		}
		// for (var i = 0; i<aTabul[0].children.length ; i ++) {
		// 	through(aTabul[0].children[i]);
		// }
		
		
	//穿墙效果
	function getdir(obj,obj2,ev){
		//var x=obj2.offsetLeft+obj2.offsetWidth/2-(ev.clientX-280);
		var x=getpost(obj2).left+obj2.offsetWidth/2-(ev.clientX);
		
		var y=obj2.offsetTop+obj2.offsetHeight/2-ev.clientY;
		//console.log(ev.clientX,ev.clientY,x,y,ev)
		console.log(getpost(obj2).left);
		 return Math.round((Math.atan2(x,y)*180/Math.PI+180)/90)%4;
		//return Math.round((Math.atan2(x,y)));
	}
	function through(obj){

	
		var aDiv=obj.children;
		for(var i=0; i<aDiv.length; i++){
			aDiv[i].onmouseenter=function(ev){
				var oS=this.children[0];
				var oEvent=ev||event;
				var dir=getdir(obj,this,oEvent);
				
				//console.log(dir)
				switch(dir){
					case 0:
						oS.style.top='240px';
						oS.style.left='0'
					break;
					case 1:
						oS.style.top='0';
						oS.style.left='240px'
					break;
					case 2:
						oS.style.top='-240px';
						oS.style.left='0'
					break;
					case 3:
						oS.style.top='0';
						oS.style.left='-240px'
					break;
				}
				 startMove(oS,{left:0,top:0},{duration:1000});
			};

			aDiv[i].onmouseleave=function(ev){
				var oS=this.children[0];
				var oEvent=ev||event;
				var dir=getdir(obj,this,oEvent);

				//console.log(dir)
				switch(dir){
					case 0:
						
					 startMove(oS,{left:0,top:240},{duration:1000});
					break;
					case 1:
					 startMove(oS,{left:240,top:0},{duration:1000});
					break;
					case 2:
						
					 startMove(oS,{left:0,top:-240},{duration:1000});
					break;
					case 3:
						
					 startMove(oS,{left:-240,top:0},{duration:1000});
					break;
				}	
			};
		}
	};




//第四屏：
var oComputer_bg=document.getElementById('computer_bg');
var oNote=document.getElementById('note');
var oMouse=document.getElementById('mouse');
var oCup=document.getElementById('cup');
var oGlasses=document.getElementById('glasses');

Drag(oNote);
Drag(oMouse);
Drag(oCup);
Drag(oGlasses);


// var aComputer=oComputer_bg.children;
// for(var i=0; i<aComputer.length-1; i++){
// 	Drag(aComputer[i]);
// }

//拖拽函数
function Drag(obj){
	
	obj.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-obj.offsetLeft;
		var disY=oEvent.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			var cW=document.documentElement.clientWidth;
				var cH=document.documentElement.clientHeight;

				if(l<0){
					l=0;
				}else if(l>(cW-obj.offsetWidth)){
						l=(cW-obj.offsetWidth)
				}

				if(t<0){
					t=0;
				}else if(t>(cH-obj.offsetHeight)){
						t=(cH-obj.offsetHeight)
				}

			obj.style.left=l+'px';
			obj.style.top=t+'px';
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			obj.relaesCapture&&obj.relaesCapture();
		};
		obj.setCapture&&obj.setCapture();
		return false;
	}
}

	//通过拖动事件不断更新宽高
	window.onresize=function(){

		Ch=document.documentElement.clientHeight;
		Cw=document.documentElement.clientWidth;
		//full屏高度；
		for (var i = 0; i < aM_page.length; i++) {
			aM_page[i].style.height=Ch+'px';
		}
		//导航滑动距离
		Nhegiht=aNavbtn[0].offsetHeight;
		//轮播图页面设置宽高
		// for(var i=0; i<aWelcome.length; i++){
		// 	aWelcome[i].style.width=oPbanner.parentNode.offsetWidth+'px';
		// }
		//oPbanner.style.width=1200*aWelcome.length+'px';
		//oPbanner.style.height=Ch-100+'px';
		//拖拽后进行的初始化
		// tick();
		oMain.style.top=-Ch*iNow+'px';
		nav();
	}
}