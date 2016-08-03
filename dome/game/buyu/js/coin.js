//版权 北京智能社©, 保留所有权利
function Coin(imgs,type){
	// 1 2 3  : 银币  4 5 金币
	switch(type){
		case 1:
		case 2:
		case 3:
			type = 1;
			break;
		case 4:
		case 5:
			type = 2;
			break;
	}
	
	Sprite.call(this,imgs["coinAni"+type]);	
	var size = [
		null,
		{w: 60 , h: 60},
		{w: 60, h: 60}
	];
	this.w = size[type].w;
	this.h = size[type].h;
	this.type = type;
	this.count = 0;
	
}
Coin.prototype = new Sprite();
Coin.prototype.constructor = Coin;


Coin.prototype.move = function(){
	
	this.count++;
	if(this.count%3 == 0){
		this.sy += this.h;
		if(this.sy >= this.h*9){
			this.sy = 0;
		}
	}
	
	
	//收金币
	this.x += (0 - this.x)/20;
	this.y += (700 - this.y)/20;
	
	
	
};






