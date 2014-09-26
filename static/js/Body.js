/*
 * 主画布类
 * */
function Body(id){
	var self = this;
	self.dom = document.getElementById(id);
	self.ctx = self.dom.getContext("2d");
	self._width = self.dom.width;
	self._height = self.dom.height;
	Base.prototype.body = self;
	self._child = {};
}
Body.prototype = new Base();
Body.prototype.addDiv = function(json){
	var self = this;
	for(var i in json){
		self._child[i] = json[i];
	}
	return self;
}
//查找子元素 包括数组
Body.prototype.find = function(name){
	var self = this;
	for(var i in self._child){
		var nowObj = self._child[i];
		if(i == name){
			return nowObj;
		}else{
			if(nowObj && nowObj._child){
				for(var j in nowObj._child){
					if(j == name){
						return nowObj._child[j];
					}
				}
			}
		}
	}
	console.log("nofind:" + name)
}
















































