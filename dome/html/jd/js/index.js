// JavaScript Document
 //封装轮播图
	function bannerJS(x,y){
		
		var oBanner_box=document.getElementById(x);
		var oNumber_box=document.getElementById(y);
		
		var aBanner=oBanner_box.getElementsByTagName('li');
		var aNumber=oNumber_box.getElementsByTagName('li');
		
		for( var i=0; i<aNumber.length; i++){
		aNumber[i].index=i;
		aNumber[i].onmouseover=function(){
			for( var i=0; i<aNumber.length; i++){ aBanner[i].className=''; aNumber[i].className='';}
			aBanner[this.index].className='show';
			this.className='active';
		};
			}
};


 //封装选项卡
	function JDtadJS(x,y){
		
		var oBanner_box=document.getElementById(y);
		var oNumber_box=document.getElementById(x);
		
		var aBanner=oBanner_box.getElementsByTagName('dd');
		var aNumber=oNumber_box.getElementsByTagName('li');
		
		for( var i=0; i<aNumber.length; i++){
		aNumber[i].index=i;
		aNumber[i].onmouseover=function(){
			for( var i=0; i<aNumber.length; i++){ aBanner[i].className=''; aNumber[i].className='';}
			aBanner[this.index].className='show';
			this.className='active';
		};
			}
};
window.onload=function(){
	
	bannerJS('banner','number')//banner JS
	bannerJS('clothesbcc-btn','clothesbcc-shouw')//1f轮播图
	bannerJS('cosmeticbcc-btn','cosmeticbcc-shouw')//2f轮播图
	
	bannerJS('mobilebcc-show3','mobilebcc-btn3')//3f轮播图
 	bannerJS('mobilebcc-show4','mobilebcc-btn4')//4f轮播图
	bannerJS('mobilebcc-show5','mobilebcc-btn5')//5f轮播图
	
	bannerJS('sportsbcc-btn6','sportsbcc-show6')//6f轮播图
	bannerJS('sportsbcc-btn7','sportsbcc-show7')//7f轮播图
	bannerJS('sportsbcc-btn8','sportsbcc-show8')//8f轮播图
	bannerJS('sportsbcc-btn9','sportsbcc-show9')//9f轮播图
	bannerJS('bookbcc-show','bookbcc-btn')//10f轮播图
	
	bannerJS('lifebcc-show1','lifebcc-btn1')//11f轮播图
	bannerJS('lifebcc-show2','lifebcc-btn2')
	
	JDtadJS('clothesbtn','clothesshow')
	
	JDtadJS('clothesbtn11','clothesshow11')
	JDtadJS('clothesbtn10','clothesshow10')
	JDtadJS('clothesbtn9','clothesshow9')
	JDtadJS('clothesbtn8','clothesshow8')
	JDtadJS('clothesbtn7','clothesshow7')
	JDtadJS('clothesbtn6','clothesshow6')
	JDtadJS('clothesbtn5','clothesshow5')
	JDtadJS('clothesbtn4','clothesshow4')	
	JDtadJS('clothesbtn3','clothesshow3')	
	JDtadJS('clothesbtn2','clothesshow2')	
	
	
	
		/*头部JS*/
		//地点js
		var oSite=document.getElementById('site');
		var oSpan=oSite.getElementsByTagName('span')[0];
		var aSbtn=oSite.getElementsByTagName('li');
		var aSbtna=oSite.getElementsByTagName('a');
		oSite.onmouseover=function(){
			this.className='site site1';
			};
		oSite.onmouseout=function(){
			this.className='site';
			};
		for(var i=0; i<aSbtn.length;i++){
			aSbtn[i].index=i;
			aSbtn[i].onmouseover=function(){
				for(var i=0; i<aSbtn.length;i++){aSbtn[i].className='';}
				this.className='s-btn';
			};

			aSbtn[i].onclick=function(){
				this.className='s-btn1';
				oSpan.innerHTML=aSbtna[this.index].innerHTML;
				oSite.className='site';
			};}
			//头部导航js
		var oHnav=document.getElementById('hnav');
		var aHli=oHnav.getElementsByTagName('li');
		
		
		aHli[3].onmouseover=function(){
			this.className='lactive';
			};
		aHli[3].onmouseout=function(){
			this.className='';
			};
		aHli[6].onmouseover=function(){
			this.className='lactive';
			};
		aHli[6].onmouseout=function(){
			this.className='';
			};
		aHli[7].onmouseover=function(){
			this.className='lactive';
			};
		aHli[7].onmouseout=function(){
			this.className='';
			};
		aHli[8].onmouseover=function(){
			this.className='lactive';
			};
		aHli[8].onmouseout=function(){
			this.className='';
			};
		aHli[9].onmouseover=function(){
			this.className='lactive';
			};
		aHli[9].onmouseout=function(){
			this.className='';
			};
		
			//广告消失js
		var oHbanner=document.getElementById('hbanner');
		var oHbnbtn=oHbanner.getElementsByTagName('span')[0];
		
		oHbnbtn.onclick=function(){
			oHbanner.style.display='none';
			};
		/*头部JSEND*/
	//购物车
		var oBuycar=document.getElementById('buycar');
		
		oBuycar.onmouseover=function(){
			this.className='buycar bc-btn';
			};
		oBuycar.onmouseout=function(){
			this.className='buycar';
			};
	// 测导航           
		var osidebar=document.getElementById('sidebar');
		var abtn=osidebar.getElementsByTagName('li');
		for( var i=0; i<abtn.length; i++){
		abtn[i].onmouseover=function(){
			this.className='sactive';
			};
		abtn[i].onmouseout=function(){
			this.className='';
			};
		}

			
		var oBtab=document.getElementById('btab');
		var oShouwtab=document.getElementById('shouwtab');
		var aBtabl=oBtab.getElementsByTagName('li');
		var aShowl=oShouwtab.getElementsByTagName('li');
		
			for(var i=0; i<aBtabl.length; i++){
				aBtabl[i].index=i;
				aBtabl[i].onclick=function(){
					for(var i=0; i<aBtabl.length; i++){aBtabl[i].className=''; aShowl[i].className='';}
					aShowl[this.index].className='show';
					this.className='active';
			};
		}
		var oMove=document.getElementById('move');
		var oMovebt=document.getElementById('movebtn');
		var aMove=oMove.getElementsByTagName('dl');
		var aPbtn=oMovebt.getElementsByTagName('p');
			for(var i=0; i<aPbtn.length;i++){
				aPbtn[i].index=i;
				aPbtn[i].onclick=function(){
					for(var i=0; i<aPbtn.length;i++){aPbtn[i].className=''; aMove[i].className='clearfix'}	
				
				aMove[this.index].className='clearfix show';
				 this.className='active';
				
				};
			}
			
/*		var oClothesbtn=document.getElementById('clothesbtn');
		var aCbtn=oClothesbtn.getElementsByTagName('li');
		var aCbtna=oClothesbtn.getElementsByTagName('a');
		
		for(var i=0; i<aCbtn.length; i++){
			aCbtn[i].index=i;
			aCbtn[i].onmouseover=function(){
				for(var i=0; i<aCbtn.length; i++){aCbtn[i].className='';}
				this.className='active';
			};
		}*/

			
			
		
		

		
		
	};
	
	