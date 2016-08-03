//版权 北京智能社©, 保留所有权利
function Fish(imgs,type){
	Sprite.call(this,imgs["fish"+type]);
	this.count = 0;
	this.type = type;
	this.rotate = 90;
	
	var size = [
		null,
		{w: 37 , h: 55},
		{w: 64, h: 78},
		{w: 56, h: 72},
		{w: 59, h: 77},
		{w: 122, h: 107}
	];
	this.w = size[type].w;
	this.h = size[type].h;
}

Fish.prototype = new Sprite();
Fish.prototype.constructor = Fish;

var oldMove = Sprite.prototype.move;
Sprite.prototype.move = function(){
	oldMove.call(this);
	
	this.count++;
	if(this.count%4 == 0){
		this.sx += this.w;
		if(this.sx >= this.w*3){
			this.sx = 0;
		}
	}
};



