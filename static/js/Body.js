/*
 * 主画布类
 * */
function Body(id){
	var self = this;
	self.dom = document.getElementById(id);
	self.ctx = self.dom.getContext("2d");
	self._width = self.dom.width;
	self._height = self.dom.height;
}
Body.prototype = new Base();
