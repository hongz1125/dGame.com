function pointToRect(x,y,x1,y1,x2,y2){
	return (x1<x && x<x2)&&(y1<y&&y<y2);
}

function mouseToSprite(event,sprite){
	var x = event.offsetX,
		y = event.offsetY,
		x1 = sprite.x(),
		y1 = sprite.y(),
		x2 = sprite.x() + sprite.width(),
		y2 = sprite.y() + sprite.height();
	//console.log(x,y,x1,y1,x2,y2)
	return (x1<x && x<x2)&&(y1<y&&y<y2);
}
/*
 * 转二维数组
 * */
function dyadicArray(w, h, row, col) {
	var i, j, cw = w / col, ch = h / row, r = [], c;
	for (i = 0; i < row; i++) {
		c = [];
		for (j = 0; j < col; j++) {
			c.push({x : cw * j, y : ch * i});
		}
		r.push(c);
	}
	return r;
};
/*
 * 计算帧率fps
 * 
 */
function calculateFps(){
	var now = (+new Date);
	var time = (now - lastTime) || 1;
	var fps = 1000/time;
	lastTime = now;
	return fps;
}



























