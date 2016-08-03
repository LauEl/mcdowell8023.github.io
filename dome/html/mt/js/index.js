'user strict'

	function mouv( obj,class1,class2){			//移入移除函数封装
		function fnphv(){				
			obj.className=class1;
		}
		function fnphu(){
			obj.className=class2;
		}
		addEvent(obj,'mouseover',fnphv);
		addEvent(obj,'mouseout',fnphu);
	}

	function mouv2( obj,class1,class2,class3,class4){			//移入移除函数封装2
		function fnphv(){				
			obj.className=class1;
			var oPrev=obj.previousElementSibling||obj.previousSibling;
			oPrev.className=class3;
		}
		function fnphu(){
			obj.className=class2;
			var oPrev=obj.previousElementSibling||obj.previousSibling;
			oPrev.className=class4;
		}
		addEvent(obj,'mouseover',fnphv);
		addEvent(obj,'mouseout',fnphu);
	}

window.onload=function(){

	 
	var oPh=document.getElementById('phone');
	var oMt=document.getElementById('mymt');
	var oZj=document.getElementById('zj');
	var oBcar=document.getElementById('buycar');
	var oTalk=document.getElementById('talk');
	var oIm=document.getElementById('im');
	var oMore=document.getElementById('more');


	mouv( oPh,'last show','last')//手机美团下拉菜单
	mouv( oMt,'mymt show','mymt')//我的美团下拉菜单

	mouv2( oZj,"zj show","zj",'mymt hide','mymt')
	mouv2( oBcar,"buycar show","buycar","zj hide","zj")
	mouv2( oTalk,"talk show","talk","buycar hide","buycar")
	mouv2( oIm,"im show","im","talk hide","talk")
	mouv2( oMore,"more show","more","im hide","im")


	var oBanbox=document.getElementById('bannerone');		//广告关闭js
	var oBancl=oBanbox.getElementsByTagName('a')[0];

	addEvent(oBancl,'click',fnclose);
	function fnclose(){
		oBanbox.style.display='none';
	}


	var oTl=document.getElementById('tl');				//输入框下拉菜单
	var oTla=oTl.children[0];
	var oTlbtn=oTl.children[1];

	mouv( oTl,'tl show','tl')
	addEvent(oTlbtn,'click',fninner);
	function fninner(){
		var a=oTla.innerHTML;
		oTla.innerHTML=oTlbtn.innerHTML;
		oTlbtn.innerHTML=a;
	}

	var oSek=document.getElementById('searchk');		//输入框焦点事件

	addEvent(oSek,'focus',fnfocus);
	function fnfocus(){
		if (oSek.value=='请输入商品名称、地址等') {
				oSek.style.color='#333';
				oSek.value='';
		}
	}

	addEvent(oSek,'blur',fnblur);
	function fnblur(){
		if (oSek.value=='') {
				oSek.style.color='#ccc';
				oSek.value='请输入商品名称、地址等';
		}
	}



	var oSbar=document.getElementById('sidebar');
	var aLi=oSbar.getElementsByTagName('li')
										//侧边栏菜单
	for (var i = 0; i < aLi.length; i++) {
		
		aLi[i].onmouseover=function(){
			this.className='show';
		};
		aLi[i].onmouseout=function(){
			this.className='';
		};
	}

	var oMbtn=document.getElementById('morebtn');
	var oAdsb=document.getElementById('addressbox');//侧边栏菜单
	var oAd=document.getElementById('addre');

		oMbtn.onmousemove = function(){		
			
			oAdsb.className='clearfix show';	
}
			oAd.onmouseout = function(ev){
				var oEvent=ev||event;
				var oTo=oEvent.toElement||oEvent.relatedTarget;

				if (oAd.contains(oTo))return;
			 		oAdsb.className='';
			}

		

		var oBner=document.getElementById('banner1');		//上部轮播
		var oBprv=document.getElementById('banprov');
		var oBnet=document.getElementById('bannext');
		var oDl=document.getElementById('dl');
		var inum=0;
		var timer=null;
		oBprv.onclick=function(){
			inum--;
			if (inum==-1) {
				inum=oDl.children.length-1;
			}
			oDl.style.left=-inum*700+'px';
		}
		oBnet.onclick=tick;
		clearInterval(timer);
		timer=setInterval(function(){
			tick();
		},1000)

		oBner.onmouseover=function(){
			oBnet.style.right='0';
			oBprv.style.left='0';
			clearInterval(timer);
		};
		oBner.onmouseout=function(){
			
			oBnet.style.right='-24px';
			oBprv.style.left='-24px';
			clearInterval(timer);
			timer=setInterval(function(){
				tick();
			},1000)
		};
		function tick(){
			inum++;
			if (inum==oDl.children.length) {
				inum=0;
			}
			oDl.style.left=-inum*700+'px';
		}

		var oTime=document.getElementById('time');			//倒计时
		var cnum=72009;
		var timer3=null;
		countdown();
		clearInterval(timer3);
		timer3=setInterval(function(){
			cnum--;
			
			countdown();
		},1000)
		
		function countdown(){
			var H=parseInt(cnum/3600)
			var H1=parseInt(H%100/10)
			var H2=parseInt(H%10)
			m=cnum%3600;
			var M=parseInt(m/60)
			var M1=parseInt(M/10)
			var M2=parseInt(M%10)
			s=cnum%60;
			var S1=parseInt(s/10)
			var S2=parseInt(s%10)

			oTime.innerHTML='<span class="time1">'+H1+'</span><span class="time1">'+H2+'</span><i>:</i><span class="time1">'+M1+'</span><span class="time1">'+M2+'</span><i>:</i><span class="time1">'+S1+'</span><span class="time1">'+S2+'</span>'
		}
		


		var oBuyb=document.getElementById('buybox');		//buy中部轮播
		var oBuyprv=document.getElementById('buyprov');
		var oBuynet=document.getElementById('buynext');
		var oBuym=document.getElementById('buym');
		var inum2=0;
		var timer2=null;
		oBuyprv.onclick=function(){
			inum2--;
			if (inum2==-1) {
				inum2=oBuym.children.length-1;
			}
			oBuym.style.left=-inum2*1164+'px';
		}
		oBuynet.onclick=tick2;
		clearInterval(timer2);
		timer2=setInterval(function(){
			tick2();
		},1000)

		oBuyb.onmouseover=function(){
			oBuynet.style.right='0';
			oBuyprv.style.left='0';
			clearInterval(timer2);
		};
		oBuyb.onmouseout=function(){
			
			oBuynet.style.right='-24px';
			oBuyprv.style.left='-24px';
			clearInterval(timer2);
			timer2=setInterval(function(){
				tick2();
			},1000)
		};
		function tick2(){
			inum2++;
			if (inum2==oBuym.children.length) {
				inum2=0;
			}
			oBuym.style.left=-inum2*1164+'px';
		}




		var oBtn=document.getElementById('fnavt');
		var aBtn=oBtn.children;
		var oTab=document.getElementById('fnavb');
		var aTab=oTab.children;

		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className='';
					aTab[i].className='';
				}
				this.className='active';
				aTab[this.index].className='show';
			};
		}
};






