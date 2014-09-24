//-----------------------------------精灵事件
Base.prototype.on = function(type,FUN){
	var self = this;
	self.body.dom.addEventListener(type,FUN,false);
	return self;
}
Base.prototype.off = function(type,FUN){
	var self = this;
	self.body.dom.removeEventListener(type,FUN,false);
	return self;
}
