/**
 * Created by Administrator on 2016/4/13.
 */
window.onload=function(){
//  搜索框
    var oIpt=document.getElementById('htbd-ipt1');
    var oDiv=document.getElementById('htbd-div');
    var aA=oDiv.getElementsByTagName('a');
    var aB=oDiv.getElementsByTagName('b');
    oIpt.onclick=function(){
        if(oIpt.className=='htbd-ipt1'){
            oIpt.className='';
            oIpt.value='哆啦A梦：伴我同行';
            oDiv.className='htbd-div';
        }else{
            oIpt.className='htbd-ipt1';
            oIpt.value='';
            oDiv.className='show htbd-div';
        }
    };
    for(var i=0;i<aA.length;i++){
        aA[i].index=i;
        aA[i].onmouseover=function(){
            for(var i=0;i<aA.length;i++){
                aA[i].className='';
            }
            this.className='active';
        };
        aA[i].onclick=function () {
            oIpt.value=aB[this.index].innerHTML;
            oDiv.className='htbd-div';
            oIpt.className='';
        };
    }
    overout('htbd-ipt1','htbd-div','htbd-div','htbd-ipt1','show','');
    overout('htbd-a1s','htbd-a1','htbd-a1','span1','','');
    overout('htbd-a2s','htbd-a2','htbd-a2','span2','','');
    overout('htbd-a3s','htbd-a3','htbd-a3','span3','','');
    overout('hbbul-ul','hbbu-li1','hbbu-li1','show','','hbbul-ul');
    hover('hbbul-ul','li','a','active');
    overout('hbbul-ul1','hbbu-li2','hbbu-li1','show','','hbbul-ul');
    hover('hbbul-ul1','li','a','active','');

    xxk('xxk-ul1','li','xxk-ul','li','active','show','','');

    hover('m1lb-div-1','a','div','show','');
    xxk('m1lt-ul01','li','m1lb-div-1','ul','active','show','clearfix','clearfix');
   
    hover('m2l-b','li','div','show','m2lb-div');
    xxk('m2lt-ul','li','m2l-b','ul','active','show','clearfix','clearfix');
    xxk('m2ru','dl','m2ru','a','hide','show','clearfix','');

    hover('m2l-b1','li','div','show','m2lb-div');
    xxk('m2lt-ul1','li','m2l-b1','ul','active','show','clearfix','clearfix');
    xxk('m2ru1','dl','m2ru1','a','hide','show','clearfix','');

    hover('m1lb-div','a','div','show','');
    xxk('m1lt-ul','li','m1lb-div','ul','active','show','clearfix','clearfix');


    xxk('m2ru1-zy','dl','m2ru1-zy','a','hide','show','clearfix','');

    hover('m1lb-div-11','a','div','show','');
    xxk('m1lt-ul11','li','m1lb-div-11','ul','active','show','clearfix','clearfix');


    hover('m6l-b','a','div','show','');
    xxk('m6l-b1','li','m6l-b','ul','active','show','clearfix','clearfix');

}

function overout(x,y,z,w,v,r) {
    var oIpt=document.getElementById(x);
    var oDiv=document.getElementById(y);
    oDiv.onmouseout=function () {
        oDiv.className=z;
        oIpt.className=r;
    };
    oDiv.onmouseover=function () {
        oDiv.className = z+' '+v;
        oIpt.className = w+' '+r;
    };
}
function hover(x,y,z,w,v) {
    var oDiv=document.getElementById(x);
    var aDiv=oDiv.getElementsByTagName(y);
    var aLi=oDiv.getElementsByTagName(z);
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].index=i;
        aDiv[i].onmouseover=function () {
            aLi[this.index].className=w+' '+v;
        };
        aDiv[i].onmouseout=function () {
            aLi[this.index].className=v;
        };

    }
}

function  xxk(x,y,z,w,v,r,a,b) {
    var oUl1=document.getElementById(x);
    var aLi1=oUl1.getElementsByTagName(y);
    var oUl2=document.getElementById(z);
    var aLi2=oUl2.getElementsByTagName(w);
    for(var i=0;i<aLi1.length;i++){
        aLi1[i].index=i;
        aLi1[i].onmouseover=function () {
            for(var i=0;i<aLi1.length;i++){
                aLi1[i].className=a;
                aLi2[i].className=b;
            }
            this.className=v+' '+a;
            aLi2[this.index].className=r+' '+b;
        };
    }
}
