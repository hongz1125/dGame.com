/*
 * 层类
 * */
function Div(){
	var self = this;
	self.childSprite = {};
}
//继承
Div.prototype.addSprite = function(json){
	var self = this;
	for(var i in json){
		var s = json[i];
		self.childSprite[i] = s;
		s.body = self.body;
		s.ctx = s.body.ctx;
	}
	return self;
}
Div.prototype.childDraw = function(){
	var self = this;
	for(var i in self.childSprite){
		var s = self.childSprite[i];
		if(s.visible){
			s.body.ctx.save()
			s.body.ctx.beginPath();
			s.painter(s,body.ctx);//绘制每个精灵到图层
			s.body.ctx.closePath();
			s.body.ctx.restore();
		}
	}
	return self;
}
Div.prototype.childClearDraw = function(){//清楚画布并绘制
	var self = this;
	self.body.clearRect();
	self.childDraw();
	return self;
}

Div.prototype.update = function(){
	var self = this;
	for(var i in self.childSprite){
		var _s = self.childSprite[i];
		_s.update();
	}
	return self;
}













