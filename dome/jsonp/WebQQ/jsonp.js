'use strict'
function jsonp(json){
	//url data success error time
	json=json||{};
	if (!json.url)return;
	json.data=json.data||{};
	json.time=json.time||5000;
	json.cbName=json.cbName||'cb';
	json.data[json.cbName]=('show'+Math.random()).replace('.','')
	var arr=[];
	for(var name in json.data){
		arr.push(name+'='+encodeURIComponent(json.data[name]))
	}
	var str=arr.join('&');
	var timer=setTimeout(function(){
		window[json.data[json.cbName]]=null;
		json.error&&json.error('网络好像出了点问题！')
	},json.time)
	window[json.data[json.cbName]]=function(result){
		clearTimeout(timer);
		json.success&&json.success(result);
	}

	var oHead=document.head;
	var oS=document.createElement('script');
	oS.src=json.url+'?'+str;

	oHead.appendChild(oS);
}