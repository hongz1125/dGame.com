

//--------------------------------------------精灵方法

//图片写入
Base.prototype.drawImage = function(D){
	var self = this;
	var D = D ||　self;
	if(
		D._sx != undefined && 
		D._sy != undefined && 
		D._swidth != undefined && 
		D._sheight != undefined && 
		D._x != undefined && 
		D._y != undefined && 
		D._width != undefined && 
		D._height != undefined
	){
		self.ctx.drawImage(D.dom,D._sx,D._sy,D._swidth,D._sheight,D._x,D._y,D._width,D._height);	
		return self;
	}
	if(
		D._x != undefined && 
		D._y != undefined && 
		D._width != undefined && 
		D._height != undefined
	){
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

