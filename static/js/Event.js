//-----------------------------------精灵事件
Base.prototype.on = function(type,FUN){
	body.dom.addEventListener(type,FUN,false);
}
Base.prototype.off = function(type,FUN){
	body.dom.removeEventListener(type,FUN,false);
}
