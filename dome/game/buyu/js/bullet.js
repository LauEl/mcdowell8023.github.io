//版权 北京智能社©, 保留所有权利
function Bullet(oImg,type){
	Sprite.call(this,oImg);
	this.speed = 10;
	
	var size = [
		null,
		{sx:32, sy:35, w:27, h:31},
		{sx:30, sy:82, w:29, h:33},
		{sx:0,  sy:82, w:30, h:34},
		{sx:30, sy:0, w:31, h:35},
		{sx:0,  sy:0, w:30, h:44},
		{sx:0,  sy:0, w:30, h:44},
		{sx:0,  sy:0, w:30, h:44},
		{sx:0,  sy:0, w:30, h:44},
	];
	
	this.sx = size[type].sx;
	this.sy = size[type].sy;
	this.w = size[type].w;
	this.h = size[type].h;
	this.type = type;
	
}
Bullet.prototype = new Sprite();
Bullet.prototype.constructor = Bullet;