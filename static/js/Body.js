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

Body.prototype.find = function(name){
	var self = this;
	var ary = [];
	function doSome(selfA){
		if(selfA && selfA._child){
			for(var i in selfA._child){
				var selfC = selfA._child[i];
				if(i == name){
					ary.push(selfC);
				}
				doSome(selfC);
			}
		}
	}
	doSome(self);
	if(ary.length == 0){
		return false;
	}else if(ary.length == 1){
		return ary[0]
	}else{
		return ary;
	}
}






















