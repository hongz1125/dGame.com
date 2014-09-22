/*
 * 层类
 * */
function Div(name){
	var self = this;
	self.dom = document.createElement("canvas");
	self.ctx = self.dom.getContext("2d");
	self._width		= self.dom.width  = "500";
	self._height	= self.dom.height = "300";
	self.divName = name;
}
//继承
Div.prototype = new Base();

