//版权 北京智能社©, 保留所有权利
function loadImages(json,fn){
	var count = 0;
	var len = 0;
	var result = {};
	for(var i in json){
		len++;
		var oImg = new Image();
		result[i] = oImg;
		oImg.onload = function(){
			count++;
			
			if(count == len){
				fn && fn(result);
			}	
		};
		oImg.src = json[i];
	}
}

function a2d(n){
	return n*180/Math.PI;	
}
function d2a(n){
	return n*Math.PI/180;	
}
function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}