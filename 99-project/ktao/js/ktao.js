(function($){
	var $KT = $('.KT')
	var $kt = $('.kt');
	$KT
	.hover(function(){
		var activeClass = $(this).data('active')+'-active';
		$(this).addClass(activeClass);
	},function(){
		var activeClass = $(this).data('active')+'-active';
		$(this).removeClass(activeClass);
	})
})(jQuery);