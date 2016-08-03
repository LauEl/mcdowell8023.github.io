// JavaScript Document

//鼠标移入变化(li版)
 	getthiscss=function(x){
	 var oUl=document.getElementById(x);
	 var aLi=oUl.getElementsByTagName('li');
	 
	 for( var i=0; i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			this.className='show';
		};
		aLi[i].onmouseout=function(){
			this.className='';
		};
	}
	};
	//鼠标移入变化(li版2)
 	getlicss=function(x){
	 var oUl=document.getElementById(x);
	 var aLi=oUl.getElementsByTagName('li');
	 
	 for( var i=0; i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			for( var i=0; i<aLi.length;i++){aLi[i].className='';}
			this.className='show';
		};

	}
	};
	//鼠标移入变化(a版)
	getacss=function(x){
		
	 var oDiv=document.getElementById(x);
	 var aA=oDiv.getElementsByTagName('a');
	 
	 for( var i=0; i<aA.length;i++){
		aA[i].onmouseover=function(){
			this.className='active';
		};
		aA[i].onmouseout=function(){
			this.className='';
		};
	}
	  	// 选项卡JS
	gettab=function(x,y){
	  var oUl1=document.getElementById(y);
	  var oUl2=document.getElementById(x);
	  var aImgshow=oUl1.getElementsByTagName('li');
	  var aImgbtn=oUl2.getElementsByTagName('li');
	  
	  for( var i=0; i<aImgbtn.length; i++){
		aImgbtn[i].index=i;
		aImgbtn[i].onmouseover=function(){
			for( var i=0; i<aImgbtn.length; i++){aImgbtn[i].className='';aImgshow[i].className='';}
			this.className='active';
			aImgshow[this.index].className='show';
		};}
	};

		
		};
	
  window.onload=function(){
	  //头部JS
	  getthiscss('hnavl')//旋转
	  
	  getthiscss('hnavr')//头部下拉
	  
	  getthiscss('nav')//导航定位显示
	  
	  getacss('menu1')//导航定位子菜单变化
	  getacss('menu2')
	  getacss('menu3')
	  
	  
	  getthiscss('cnav')//游戏下载=
	  
	  getthiscss('shejiao')//社交按钮
	  
	  
	  gettab('imgbtn','imgshow')//导航轮播图
	  gettab('navtabbtn','navtabtext')//导航新闻
	  
	  getlicss('tab2rb')//活动中心
	  
	  gettab('tab2btn','tab2img')//轮播播放图
	  
	  getacss('investigation')//图片平移
	  
	  gettab('tab3lcl','tab3lb')//玩家交流选项卡
	  gettab('tab4lcl','tab4lb')//媒体专区选项卡
	  gettab('tab4rcl','tab4rb')//媒体专区选项卡
	  
	  var oDzan=document.getElementById('dzan');//固定定位点赞
	  oDzan.onmouseover=function(){
		  this.style.left='0';
		  };
		oDzan.onmouseout=function(){
		  this.style.left='-27px';
		  };
		  
	  var oInfolb=document.getElementById('infolb');//媒体下拉菜单
			oInfolb.onmouseover=function(){
		  this.className='infol-b show';
		  };
		oInfolb.onmouseout=function(){
		  this.className='infol-b';
		  };
		  
		  
		  

	  var oInfolbnner=document.getElementById('infolbnner');
	  var aLi=oInfolbnner.getElementsByTagName('li');
	  var oNext=document.getElementById('next');
	  var oPrev=document.getElementById('prev');
	  
	  
	  for( var i=0; i<aLi.length; i++){
		 aLi[i].index=i; 
		
	  	aLi[i].onclick=function(){
			if(this.index==3){oInfolbnner.style.left=''+215*(this.index-3)+'px';}else{
	 	oInfolbnner.style.left='-'+215*(this.index+1)+'px';}
	
	};}
	  
	  
};