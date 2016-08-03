'user strict'
window.onload=function(){
	comon();

var oSortbtn=document.getElementById('sortbtn');
var aSbtn=oSortbtn.getElementsByTagName('li');
var oSbt=getByClass(oSortbtn,'bt');
var aSclose=getByClass(oSortbtn,'sclose');


	for (var i = 0; i < oSbt.length; i++) {
		oSbt[i].onmouseover=function(){
			this.parentNode.className='show';
		}
		aSbtn[i].onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement;
			if(this.contains(oTo)) return false;
			this.className='';
			//this.children[3].style.display='none';
		}
		aSclose[i].onclick=function(){
			this.parentNode.style.display='none';
		};
	}



};





