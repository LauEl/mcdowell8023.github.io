// 主页js
function whRem(rem){		//计算rem到px
	var f_size=getStyle(document.documentElement,'fontSize');
	return parseInt(f_size)*rem;
}


window.onload=window.onresize=function(){
	
	var Ch=document.documentElement.clientHeight;
	var Cw=document.documentElement.clientWidth;

	var oHeader=document.getElementById('header');
	var oMain=document.getElementById('main');
	var aM_page=oMain.children;
	var oM_page=document.getElementById('m_page');
	var aMpage=oM_page.children;

	//full屏高度；
	for (var i = 0; i < aM_page.length; i++) {
		aM_page[i].style.height=Ch+'px';
	}

	//full屏滚动及切换
	var iNow=0;
	addWheel( oMain,function(dir){
			
		if (dir) {
			iNow++;
			if (iNow==aM_page.length) {
				//iNow=0;
				iNow=aM_page.length-1;	
			} 
		} else {
			iNow--;
			if (iNow==-1) {
				//iNow=aM_page.length-1;
				iNow=0;	
			} 
		}
		tick();
	})
	for(var i=0;i<aMpage.length;i++){
		if(aMpage[i].className=='on'){
			oMain.style.top=-aM_page[i].offsetHeight*i+'px';

		}
		aMpage[i].index=i;
		aMpage[i].onclick=function(){
			iNow=this.index;
		tick();
		};
	}
	function tick(){
	//oMain.style.top=-Ch*iNow+'px';
		
		for (var i = 0; i < aMpage.length; i++) {
	  	aMpage[i].className='';
	  }
	  aMpage[iNow].className='on';	
	  startMove(oMain,{top:-Ch*iNow});

	  	nav();
	}

//导航动态
var oNavbar=document.getElementById('navbar');
	
	nav();
	function nav(){
	  	if (!iNow) {
		oNavbar.style.display='none';
		 startMove(oHeader,{top:0},{duration:2000});

		}else{
			startMove(oHeader,{top:-whRem(5)});
		 	oNavbar.style.display='block';
		}
	}

	oNavbar.onclick=function(){
		if (oHeader.offsetTop!=0) {
			startMove(oHeader,{top:0},{duration:2000});
			oNavbar.style.display='none';
		}else{
			startMove(oHeader,{top:-whRem(5)});
		}
	}
	
	 var oNav_btn=document.getElementById('nav_btn');
	 var oNav_m=document.getElementById('nav_m');
	 oNav_btn.onclick=function(){
	 	if(oNav_m.style.display=='block'){
	 		oNav_m.style.display='none';
	 	}else{
			oNav_m.style.display='block';
	 	}
	 	
	 }


	
	var oNav=document.getElementById('nav');
	var aNavbtn=oNav.children;
	var oNav_bor=oNav.children[aNavbtn.length-1];
	var Nhegiht=aNavbtn[0].offsetHeight;
		for (var i = 0; i < aNavbtn.length-1; i++) {
			aNavbtn[i].onmouseover=function(){
				var oA=this.children[0];
				var oP=this.children[1];

				oNav_bor.style.width=this.offsetWidth+'px';
				startMove(oNav_bor,{left:this.offsetLeft},{duration:300}) 
				
				 startMove(oA,{top:0})
				 startMove(oP,{top:Nhegiht})
			}
			aNavbtn[i].onmouseout=function(){
				var oA=this.children[0];
				var oP=this.children[1];
				doMove(oNav_bor,{left:0}) 
				
				 startMove(oP,{top:0})
				 startMove(oA,{top:-Nhegiht})
				 
			}
		}

// 第一屏轮播图
		var oPbanner=document.getElementById('playbanner') ;
		var aWelcome=oPbanner.children;
		var oPlaybtn=document.getElementById('playbtn') ;
		var aPlaybtn=oPlaybtn.getElementsByTagName('span');

		//轮播图页面设置宽高
		
		for(var i=0; i<aWelcome.length; i++){
			aWelcome[i].style.width=oPbanner.parentNode.offsetWidth+'px';
		}
		oPbanner.style.width=aWelcome[0].offsetWidth*aWelcome.length+'px';
		oPbanner.style.height=Ch-whRem(5)+'px';

		var icout=0;
		//轮播图播放
		function next(){
				for(var i=0; i<aPlaybtn.length; i++){
				aPlaybtn[i].style.width=0;
			}
			startMove(aPlaybtn[icout],{width:whRem(3)},{duration:2000,complete:function(){
				icout++;

				if (icout==aPlaybtn.length) {
					icout=0;
				} 
				startMove(oPbanner,{left:-icout*aWelcome[0].offsetWidth},{duration:1000,complete:next})
				console.log(icout*aWelcome[0].offsetWidth)
			}})
		}
		next();
	
	
}