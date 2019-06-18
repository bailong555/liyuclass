var oFix = document.querySelector('.logo .fix .fix-1');
var oFix1 = oFix.children;
var oFix2 = document.getElementById('fix');
for(var i=0;i<oFix1.length;i++){
	oFix1[i].onmouseover=function(){
		oFix2.style.height='300px';
		oFix2.style.opacity=1;
	}
	oFix2.onmouseout=function(){
			oFix2.style.height='0px';
			oFix2.style.opacity=0;
	}
}

var oFix = document.querySelector('.logo .fix .fix-1');
var oBtnn = oFix.children;
var oFixbox = document.getElementById('fixbox');
var oFix2 = document.getElementById('fixx');
var oFixPhone = document.getElementById('fixsj');
oBtnn[0].onmouseover=function(){
	oFixbox.style.height='300px';
	oFix2.style.display='block';
}
oFixbox.onmouseover=function(){
		oFixbox.style.height='300px';
		oFix2.style.display='block';
}
oFixbox.onmouseout=function(){
		oFixbox.style.height='0px';
		oFix2.style.display='none';
}
oBtnn[1].onmouseover=function(){
	oFix2.style.display='none';
	oFixbox.style.height='300px';
	oFixPhone.style.display='block';
}
oFixbox.onmouseover=function(){
		oFixbox.style.height='300px';
		oFixPhone.style.display='block';
}
oFixbox.onmouseout=function(){
		oFixbox.style.height='0px';
		oFixPhone.style.display='none';
}