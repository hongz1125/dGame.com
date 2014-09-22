function Base(){
	var self = this;
	self._x = 0;
	self._y = 0;
	self._width = 0;
	self._height = 0;
}


//-------------------------------------层
Base.prototype.clearRect = function(){
	var self= this;
	self.ctx.clearRect(0,0,self.width(),self.height());
	return self;
}

Base.prototype.addSprite = function(sprite){
	var self = this;
	sprite.ctx = self.ctx;
	self.ctx.beginPath();
	sprite.content(sprite);
	self.ctx.closePath();
	return self;
}


//-----------------------------------精灵事件
Base.prototype.on = function(type,FUN){
	var self = this;
	self.dom.addEventListener(type,FUN,false);
	return self;
}
Base.prototype.off = function(type,sprite){
	var self = this;
	self.dom.removeEventListener(type,sprite,false);
	return self;
}



//------------------------------------属性
//图片获取X定位
Base.prototype.sx = function(num){
	var self = this;
	if(num){
		self._sx = num;
		return self;
	}else{
		return self._sx
	}
}
//图片获取Y定位
Base.prototype.sy = function(num){
	var self = this;
	if(num){
		self._sy = num;
		return self;
	}else{
		return self._sy
	}
}
//图片获取宽度
Base.prototype.swidth = function(num){
	var self = this;
	if(num){
		self._swidth = num;
		return self;
	}else{
		return self._swidth
	}
}
//图片获取高度
Base.prototype.sheight = function(num){
	var self = this;
	if(num){
		self._sheight = num;
		return self;
	}else{
		return self._sheight
	}
}
//x
Base.prototype.x = function(num){
	var self = this;
	if(num){
		self._x = num;
		return self;
	}else{
		return self._x
	}
}
//y
Base.prototype.y = function(num){
	var self = this;
	if(num){
		self._y = num;
		return self;
	}else{
		return self._y
	}
}
//宽度
Base.prototype.width = function(num){
	var self = this;
	if(num){
		self._width = num;
		return self;
	}else{
		return self._width
	}
}
//高度
Base.prototype.height = function(num){
	var self = this;
	if(num){
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

//--------------------------------------------精灵方法

//图片写入
Base.prototype.drawImage = function(D){
	var self = this;
	var D = D ||　self;
	if(D._sx && D._sy && D._swidth && D._sheight && D._x && D._y && D._width && D._height){
		self.ctx.drawImage(D.dom,D._sx,D._sy,D._swidth,D._sheight,D._x,D._y,D._width,D._height);	
		return self;
	}
	if(D._x && D._y && D._width && D._height){
		self.ctx.drawImage(D.dom,D._x,D._y,D._width,D._height);	
		return self;
	}
	self.ctx.drawImage(D.dom,D._x,D._y);
	return self;
}


//矩形写入
Base.prototype.fillRect = function(){
	var self = this;
	self.ctx.fillRect(self.x(),self.y(),self.width(),self.height());
	return self;
}
//文本写入
Base.prototype.fillText = function(txt){
	var self = this;
	self.ctx.fillText(txt,self.x()+self.width()/2,self.y()+self.height()/2);
	return self;
}
//文本字体大小
Base.prototype.font = function(txt){
	var self = this;
	self.ctx.font = txt;
	return self;
}
//文本颜色
Base.prototype.fillStyle = function(txt){
	var self = this;
	self.ctx.fillStyle = txt;
	return self;
}
//文本水平对齐
Base.prototype.textAlign = function(txt){
	var self = this;
	self.ctx.textAlign = txt;
	return self;
};
//文本垂直对齐
Base.prototype.textBaseline = function(txt){
	var self = this;
	self.ctx.textBaseline = txt;
	return self;
};






