//版权 北京智能社©, 保留所有权利
function Cannon(imgs,type){
	Sprite.call(this,imgs["cannon"+type]);
	this.count = 0;
	this.type = type;
}

Cannon.prototype = new Sprite();
Cannon.prototype.constructor = Cannon;


