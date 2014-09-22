/*
 * 图片预加载类
		imgLoad({
			imageAry:imageAry,
			callCenter:gameLoader,
			callReady:gameStar
		})
 * 
 * 
 * */
function imgLoad(json){
	var len = json.imageAry.length;
	var newJson = {};
	var j = 0;
	for(var i=0;i<len;i++){
		var row = json.imageAry[i];
		var obj = newJson[row.id] = new Image();
		obj.src = row.src;
		obj.onload = function(){
			j++;
			if(json.callCenter){
				json.callCenter(j,len);
			}
			if(j == len && json.callReady){
				json.callReady(newJson);
			}
		}
	}
}
function callCenter(){
	
}