// 头部固定部分
var oFix = document.querySelector('.logo .fix .fix-1');
var oFix1 = oFix.children;
var oFix2 = document.getElementById('fix');
var oFix3 = document.querySelector('.logo .qp');
var oFix4 = document.querySelector('.logo .qp .fix-1');
var oFix5 = oFix4.children;
for(var i=0;i<oFix1.length;i++){
	oFix1[i].onmouseover=function(){
		oFix2.style.height='300px';
		oFix2.style.opacity=1;
	}
	oFix2.onmouseout=function(){
		setTimeout(function(){
			oFix2.style.height='0px';
			oFix2.style.opacity=0;
			},5000)
	}
}
window.onscroll=function(){
	var iTop = getScrollTop();
	if(iTop>=87){
		oFix3.style.height='60px';
		oFix3.style.opacity=1;
	}else{
		oFix3.style.height='0px';
		oFix3.style.opacity=0;
	}
}
