/*
 * 主画布类
 * */
function Body(id){
	
	var self = this;
	self.dom = document.getElementById(id);
	self.ctx = self.dom.getContext("2d");
	self.width = self.dom.width;
	self.height = self.dom.height;
	
	self.childSprite = {};
	self.childDiv = {};
}
Body.prototype.addDiv = function(json){
	var self = this;
	for(var i in json){
		var s = json[i];
		self.childDiv[i] = s;
		s.body = self;
	}
	return self;
}
<<<<<<< HEAD
Body.prototype.clearRect = function(){
	var self= this;
	self.ctx.clearRect(0,0,self.width,self.height);
	return self;
}
//查找子元素 包括数组
Body.prototype.find = function(name){
	var self = this;
	for(var i in self.childDiv){
		var s = self.childDiv[i];
		if(i == name){
			return s;
		}else{
			if(s && s.childSprite){
				for(var j in s.childSprite){
					if(j == name){
						return s.childSprite[j];
=======
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
>>>>>>> d941898ca8cb987a44f274143b5375b7fe0ae2be
					}
				}
			}
		}
	}
	console.log("nofind:" + name)
}






































<<<<<<< HEAD
=======










>>>>>>> d941898ca8cb987a44f274143b5375b7fe0ae2be
