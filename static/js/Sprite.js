/*
 * 精灵类
 * */
function Sprite(name){
	this._x=0;
	this._y=0;
	this._width=0;
	this._height=0;
	this._animate = false;
	this.velocityX=0;
	this.velocityY=0;
	this.spriteName = name || "";
}
//继承
Sprite.prototype = new Base();
//------------------------------------属性
//图片获取X定位
Base.prototype.sx = function(num){
	var self = this;
	if(num != undefined){
		self._sx = num;
		return self;
	}else{
		return self._sx;
	}
}
//图片获取Y定位
Base.prototype.sy = function(num){
	var self = this;
	if(num != undefined){
		self._sy = num;
		return self;
	}else{
		return self._sy
	}
}
//图片获取宽度
Base.prototype.swidth = function(num){
	var self = this;
	if(num != undefined){
		self._swidth = num;
		return self;
	}else{
		return self._swidth
	}
}
//图片获取高度
Base.prototype.sheight = function(num){
	var self = this;
	if(num != undefined){
		self._sheight = num;
		return self;
	}else{
		return self._sheight
	}
}
//x
Base.prototype.x = function(num){
	var self = this;
	if(num != undefined){
		self._x = num;
		return self;
	}else{
		return self._x
	}
}
//y
Base.prototype.y = function(num){
	var self = this;
	if(num != undefined){
		self._y = num;
		return self;
	}else{
		return self._y
	}
}
//宽度
Base.prototype.width = function(num){
	var self = this;
	if(num != undefined){
		self._width = num;
		return self;
	}else{
		return self._width
	}
}
//高度
Base.prototype.height = function(num){
	var self = this;
	if(num != undefined){
		self._height = num;
		return self;
	}else{
		return self._height
	}
}

//------------------------------------宽高
//精灵dom
Base.prototype.dom = function(dom){
	var self = this;
	if(dom){
		self.dom = dom;
		return self;
	}else{
		return self._dom
	}
}
//精灵自身绘画方法
Sprite.prototype.content = function(){
	//this.content = FUN;
}

















