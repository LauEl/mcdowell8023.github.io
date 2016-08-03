window.onload=function (){
		 var oNbtn=document.getElementById('nbtn_box');
		 var oHeader=document.getElementById('header-box');
		 var aLbtn=oNbtn.getElementsByTagName('li');
		 var oHref=document.getElementById('ck');
		 var arr=[
		 	'hbd6ad',
			'hadzit',
			'ky7zr0',
			'kyefcc',
			'hb0u3t',
			'ky88lg',
			'hb9eet',
			'ohimb0',
			'hb9aux',
			'hbhs29',
		 ];
		 for( var i=0; i<aLbtn.length; i++){
			 aLbtn[i].index=i;
			 aLbtn[i].onmouseover=function(){
				 for( var i=0; i<aLbtn.length; i++){aLbtn[i].className='';}
				 this.className='li-bg';
				 oHeader.className='header-box header-bg'+(this.index+1)+'';
				 oHref.href='http://www.iqiyi.com/a_19rr'+arr[this.index]+'.html';
			};
		}
		
		 var oDb=document.getElementById('db');
		 var oXl=oDb.getElementsByTagName('div')[0];
		 var aDd=oDb.getElementsByTagName('dd');
		 	
			oDb.onmouseover=function(){
				this.className='db-box db-active';
			};
			oXl.onmouseout=function(){
				oDb.className='db-box';
			};
			for( var i=0; i<aDd.length;i++){
				aDd[i].onmouseover=function(){
					for( var i=0; i<aDd.length;i++){
					aDd[i].style.background='#fff';
					aDd[i].style.color='#333';
					}
				this.style.background='#78b500';
				this.style.color='#fff';
				};
			}
		
		
		
		 };