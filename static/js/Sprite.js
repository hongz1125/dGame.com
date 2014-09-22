/*
 * 精灵类
 * */
function Sprite(name){
	this._x=0;
	this._y=0;
	this._width=0;
	this._height=0;
	this.velocityX=0;
	this.velocityY=0;
	this.spriteName = name || "";
}
//继承
Sprite.prototype = new Base();
//精灵自身绘画方法
Sprite.prototype.content = function(FUN){
	this._content = FUN;
}


















