/*
 * 精灵类
 * */
function Sprite(){
	this._sx 		= undefined;
	this._sy 		= undefined;
	this._swidth	= undefined;
	this._sheight	= undefined;
	this._x			= undefined;
	this._y			= undefined;
	this._width		= undefined;
	this._height	= undefined;
	this.visible 	= 1;			//判断精灵是否在可是范围内
	this.animating	= 0;			//判断精灵是否需要更新数据
	this.action		= [];
	this.ctx		= undefined;	//画布在add到div时候添加
}
Sprite.prototype.paint  = function(){
	//绘制方法
}
//精灵自身绘画方法
Sprite.prototype.painter = function(){
	var self = this;
	if(self.visible){
		self.ctx.save()
		self.ctx.beginPath();
		self.paint();//绘制每个精灵到图层
		self.ctx.closePath();
		self.ctx.restore();
	}
	return self;
}
Sprite.prototype.addAction = function(name){
	var self = this;
	self.action[name] = new Animate();
	self.action[name].name = name;
	self.action[name].sprite = self;
	return self;
}

//精灵运行所有动画方法
Sprite.prototype.update = function(){
	var self = this;
	for(var i in self.action){
		var _s = self.action[i];
		if(_s._actioning && body.now - _s._updateTime > _s._speed){
			_s.action();
			_s._updateTime = body.now;
		}
	}
	return self;
}







//------------------------------------属性
//图片获取X定位
Sprite.prototype.dom = function(dom){
	var self = this;
	if(dom != undefined){
		self._dom = dom;
		return self;
	}else{
		return self._dom;
	}
}
//图片获取X定位
Sprite.prototype.sx = function(num){
	var self = this;
	if(num != undefined){
		self._sx = num;
		return self;
	}else{
		return self._sx;
	}
}
//图片获取Y定位
Sprite.prototype.sy = function(num){
	var self = this;
	if(num != undefined){
		self._sy = num;
		return self;
	}else{
		return self._sy
	}
}
//图片获取宽度
Sprite.prototype.swidth = function(num){
	var self = this;
	if(num != undefined){
		self._swidth = num;
		return self;
	}else{
		return self._swidth
	}
}
//图片获取高度
Sprite.prototype.sheight = function(num){
	var self = this;
	if(num != undefined){
		self._sheight = num;
		return self;
	}else{
		return self._sheight
	}
}
//x
Sprite.prototype.x = function(num){
	var self = this;
	if(num != undefined){
		self._x = num;
		return self;
	}else{
		return self._x
}
//y
Sprite.prototype.y = function(num){
	var self = this;
	if(num != undefined){
		self._y = num;
		return self;
	}else{
		return self._y
	}
}
//宽度
Sprite.prototype.width = function(num){
	var self = this;
	if(num != undefined){
		self._width = num;
		return self;
	}else{
		return self._width
	}
}
//高度
Sprite.prototype.height = function(num){
	var self = this;
	if(num != undefined){
		self._height = num;
		return self;
	}else{
		return self._height
	}
}



















