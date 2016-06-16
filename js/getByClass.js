'user strict'
	function findinarr(arr,item){
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]==item){
				return true;
			}
		}
		return false;
	}
	function getByClass(obj,sClass){
		if(obj.getElementsByClassName){
			 return obj.getElementsByClassName(sClass);

		}else{

			var aEle=obj.getElementsByTagName('*');
			var aResult=[];
			for (var i = 0; i < aEle.length; i++) {
				var aClass=aEle[i].className.split(' ')
				alert(aClass);
				if (findinarr(aClass,sClass)) {
					aResult.push(aEle[i]);
				}
			}
			console.log(aResult)
			return aResult;

		}
	}
