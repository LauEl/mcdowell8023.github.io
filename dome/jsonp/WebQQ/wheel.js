function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}

function addWheel(obj,fn){
	function fnDir(ev){
		var oEvent=ev||event;
		var dir=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		fn(dir);
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}
	
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',fnDir);
	}else{
		addEvent(obj,'mousewheel',fnDir);
	}	
}