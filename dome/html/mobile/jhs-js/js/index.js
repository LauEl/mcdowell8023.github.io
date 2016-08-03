'user strict'
var rem = 20;
function changeSize(){
	rem = 20/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize = rem + "px";	
}

window.addEventListener("resize",changeSize,false);

document.addEventListener("DOMContentLoaded",function(){
	changeSize();
	var oUl  = document.querySelector(".page .banner ul");
	var aLi  = oUl.children;
	var len  = aLi.length;
	var oBtnbox  = document.querySelector(".page .banner ol");
	var aLbtn = oBtnbox.children;
	var iNow=0;


	
	var w = aLi[0].offsetWidth/rem;
	var x = -w;
	var bReady = true;
	oUl.addEventListener("touchstart",function(ev){
		
		if(!bReady) return;
		bReady = false;
		
		oUl.style.transition = "none";
		var disX = ev.targetTouches[0].pageX/rem - x;
		function fnMove(ev){
			x = ev.targetTouches[0].pageX/rem - disX;
			oUl.style.WebKitTransform = "translate3d("+x+"rem,0,0)";
			oUl.style.transform = "translate3d("+x+"rem,0,0)";

		}
		function fnEnd(){
			document.removeEventListener("touchmove",fnMove,false);
			document.removeEventListener("touchend",fnEnd,false);
			
			var n = Math.round(-x/w);
			



			iNow=n-1;
			if(iNow==aLbtn.length){
				iNow=0;
			}else if(iNow==-1){
				iNow=aLbtn.length-1;
			}
			for(var i = 0;i < aLbtn.length ;i++){
				aLbtn[i].className='';
			}
			aLbtn[iNow].className='active';

			console.log(n);
			if(n < 0){
				n = 0;
			} else if(n >= len) {
				n = len - 1;
			}
			oUl.style.transition = "0.7s all ease";
			x = -n*w;
			oUl.style.WebKitTransform = "translate3d("+x+"rem,0,0)";
			oUl.style.transform = "translate3d("+x+"rem,0,0)";
			function tEnd(){
				bReady = true;
				oUl.style.transition = "none";
				oUl.removeEventListener("transitionend",tEnd,false);
				//alert("运动完成 当前的n：" + n);
				if(n == aLi.length-1){
					x = -w;
					oUl.style.WebKitTransform = "translate3d("+x+"rem,0,0)";
					oUl.style.transform = "translate3d("+x+"rem,0,0)";
				} else if(n == 0){
					x = -(aLi.length-2)*w;
					oUl.style.WebKitTransform = "translate3d("+x+"rem,0,0)";
					oUl.style.transform = "translate3d("+x+"rem,0,0)";
				}
			}	
			oUl.addEventListener("transitionend",tEnd,false);		
		}
		
		document.addEventListener("touchmove",fnMove,false);
		document.addEventListener("touchend",fnEnd,false);
		
		ev.preventDefault();
	},false);
},false);
