/*
 * 层类
 * */
function Div(name){
	var self = this;
	self.dom = document.createElement("canvas");
	self.ctx = self.dom.getContext("2d");

	self._width	= self.dom.width = self.body.width();
	self._height = self.dom.height = self.body.height();
	self.divName = name;
	self._child = {};
}
//继承
Div.prototype = new Base();
Div.prototype.addSprite = function(json){
	var self = this;
	for(var i in json){
		self._child[i] = json[i];
		json[i].ctx = self.ctx;
	}
	return self;
}
Div.prototype.drawChild = function(){
	var self = this;
	self.clearRect();
	for(var i in self._child){
		self._child[i].content();//绘制每个精灵到临时图层
	}
	self.body.clearRect().drawImage(self);//绘制临时图层到主图层
	return self;
}
