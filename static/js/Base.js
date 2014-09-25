function Base(){
	var self = this;
	self._x = 0;
	self._y = 0;
	self._width = 0;
	self._height = 0;
}

/*
 * 添加元素到父层
 * {"name":obj}
 * */




//-------------------------------------层
Base.prototype.clearRect = function(){
	var self= this;
	self.ctx.clearRect(0,0,self.width(),self.height());
	return self;
}

Base.prototype.addSprite = function(sprite){
	var self = this;
	sprite.ctx = self.ctx;
	sprite.ctx.beginPath();
	sprite.content();
	sprite.ctx.closePath();
	return self;
}








