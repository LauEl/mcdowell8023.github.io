'user strict'
function getpost(){
	var l=0; 
	var r=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetparent;
	}
	return {left:l,top:t};
}