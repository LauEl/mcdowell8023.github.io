/*轮播图*/
function lunbo(x,y,z,a){
	var oDiv=document.getElementsByClassName(x)[0];
	var aSpan=oDiv.getElementsByTagName(y);
	var oBox=document.getElementsByClassName(z)[0];
	var aLi=oBox.getElementsByClassName(a);
	for(var i=0; i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(var i=0; i<aSpan.length;i++){
				aSpan[i].className='';
				aLi[i].className=a;	
			}	
				this.className='active';
				aLi[this.index].className=a+' '+'show';
		};	
	}
}


/*鼠标移入移出*/
function overOut(x,y,z,a){
	var oDiv=document.getElementsByClassName(x)[0];
	var aSpan=oDiv.getElementsByTagName(y);
	var oBox=document.getElementsByClassName(z)[0];
	var aLi=oBox.getElementsByClassName(a);
	for(var i=0; i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(var i=0; i<aSpan.length;i++){
				aSpan[i].className='';
				aLi[i].className=a;	
			}	
				this.className='active';
				aLi[this.index].className=a+' '+'show';
		};	
		aSpan[i].onmouseout=function(){
			this.className='';
			aLi[this.index].className=a+' '+'hide';	
		};
	}
}

function overOut1(x,y,z,a){
	var oDiv=document.getElementsByClassName(x)[0];
	var aSpan=oDiv.getElementsByClassName(y);
	var oBox=document.getElementsByClassName(z)[0];
	var aLi=oBox.getElementsByClassName(a);
	for(var i=0; i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(var i=0; i<aSpan.length;i++){
				aLi[i].className=a;	
			}	
				aLi[this.index].className=a+' '+'show';
		};	
		aSpan[i].onmouseout=function(){
			aLi[this.index].className=a+' '+'hide';	
		};
	}
}
/*鼠标点击替换*/
function onclick(){
	var oDiv=document.getElementsByClassName('sousuo')[0];
	var aLi=oDiv.getElementsByTagName('li');
	var oInput=document.getElementsByClassName('input1')[0];
	var array=['搜索您需要的宝贝','上天猫，就购了','搜索您需要的店铺'];
	for(var i=0; i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0; i<aLi.length;i++){
				aLi[i].className='';	
			}
			this.className='active';
			oInput.value=array[this.index];	
		};	
	}	
}
/*鼠标点击事件*/
function onclick1(x,y,z){
	var oUl=document.getElementsByClassName(x)[0];
	var oSpan=oUl.getElementsByTagName(y)[0];
	var aLi=oUl.getElementsByTagName(z);
	oSpan.onclick=function(){
		for(var i=0; i<aLi.length; i++){
			if(aLi[i].className=='')
			{
				aLi[i-1].className='show';	
			}
			else{
				aLi[i+1].classNmae='hide';	
			}
		}
	};	
}

function overOut2(x,y,z,a){
	var oDiv=document.getElementsByClassName(x)[0];
	var aSpan=oDiv.getElementsByClassName(y)[0];
	var oBox=document.getElementsByClassName(z)[0];
	var aLi=oBox.getElementsByClassName(a)[0];
		aSpan.onmouseover=function(){
			aSpan.className=y+' '+'active';	
			aLi.className=a+' '+'show';
		};
		aSpan.onmouseout=function(){
			aSpan.className=y;
			aLi.className=a+' '+'hide';	
		};
}
window.onload=function(){
	/*宝贝店铺*/
	lunbo('span1','span','lunbo1','li');
	lunbo('span2','span','lunbo2','li');
	lunbo('nav-right-top','li','nav-right-top2','ul');
	lunbo('box7-top','li','box7-bottom','bottom1');
	overOut('box2-ul1','li','box2-ul1','div2');
	
	
	overOut('box2-ul2','li','box2-ul2','dingwei');

	overOut1('contain4','ewm','contain4','dingwei');
	overOut1('contain5','ewm','contain5','dingwei');
	overOut1('c5-ul','li','c5-ul','bg');
	overOut1('contain6','ewm','contain6','dingwei');
	overOut1('contain7-bottom','dt','contain7-bottom','dingwei');
	overOut1('contain7-bottom','dd','contain7-bottom','dingwei1');
	
	
	overOut2('hd-right','li1','li1','dingwei1');
	overOut2('hd-right','li2','li2','dingwei2');
	overOut2('hd-right','li3','li3','dingwei3');
	overOut2('hd-right','li5','li5','dingwei5');
	overOut2('hd-right','li6','li6','dingwei6');
	overOut2('hd-right','li7','li7','dingwei7');
	
	onclick();
	onclick1('c5-ul2','span','li')
};