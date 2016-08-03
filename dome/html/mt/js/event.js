'use strict'
	function addEvent(obj,sEv,fn){
		if (obj.attachEvent) {
			obj.attachEvent('on'+sEv,fn);
		} else {
			obj.addEventListener(sEv,fn,false)
		}
	}
	function removeEvent(obj,sEv,fn){
		if (obj.detachEvent) {
			obj.detachEvent('on'+sEv,fn)
		} else {
			obj.removeEventListener(sEv,fn,false)
		}
	}