/*
 * 精灵类
 * */
function Sprite(){
	this._sx 		= undefined;
	this._sy 		= undefined;
	this._swidth	= undefined;
	this._sx 		= undefined;
	this._sheight	=undefined;
	this._x			=0;
	this._y			=0;
	this._width		=0;
	this._height	=0;
	this.visible 	= 1;
}

//精灵自身绘画方法
Sprite.prototype.content = function(){
	//this.content = FUN;
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

<<<<<<< HEAD

=======
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
>>>>>>> d941898ca8cb987a44f274143b5375b7fe0ae2be

















