//-----------------------------------精灵事件
<<<<<<< HEAD
Sprite.prototype.on = function(type,FUN){
	body.dom.addEventListener(type,FUN,false);
}
Sprite.prototype.off = function(type,FUN){
=======
Base.prototype.on = function(type,FUN){
	body.dom.addEventListener(type,FUN,false);
}
Base.prototype.off = function(type,FUN){
>>>>>>> d941898ca8cb987a44f274143b5375b7fe0ae2be
	body.dom.removeEventListener(type,FUN,false);
}
