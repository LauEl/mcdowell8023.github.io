'user strict'


function comon(){

	 
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





	var oNavbt=document.getElementById('navbt');
	var oSbar=document.getElementById('sidebar');
	var aLi=oSbar.getElementsByTagName('li')					//侧边栏菜单
	for (var i = 0; i < aLi.length; i++) {
		
		aLi[i].onmouseover=function(){
			this.className='show';
		};
		aLi[i].onmouseout=function(){
			this.className='';
		};
	}
	oNavbt.onmouseover=function(){
		oNavbt.className='nbt nav-bt';
	};
	oNavbt.onmouseout=function(){
		oNavbt.className='nav-bt';
	};



		var oBtn=document.getElementById('fnavt');				//底部选项卡
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
}

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





