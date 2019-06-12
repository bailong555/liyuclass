cart();
function cart(){
	var oCart = document.querySelector('.cart');
	var oCartBox = document.querySelector('.cart-box');
	oCart.onmouseenter=function(){
		oCartBox.style.zIndex=9;
		animation(oCartBox.[height:100],true);
	}
	oCart.onmouseleave=function(){
		animation(oCartBox.[height:0],true);
		oCartBox.style.zIndex=0;
	}
}