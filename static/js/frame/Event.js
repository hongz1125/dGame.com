//-----------------------------------精灵事件
Sprite.prototype.on = function(type,FUN){
	body.dom.addEventListener(type,FUN,false);
}
Sprite.prototype.off = function(type,FUN){
	body.dom.removeEventListener(type,FUN,false);
}
