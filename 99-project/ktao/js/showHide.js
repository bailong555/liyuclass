(function($){
	function init($elem,hiddenCallback){
		if($elem.is('hidden')){
			$elem.data('status','hidden');
			typeof hiddenCallback == 'function' && hiddenCallback();
		}else{
			$elem.data('status','shown')
		}
	}
	function show($elem,callback){
		if($elem.data('status')=='show') return;
		if($elem.data('status')=='shown') return;
		$elem.trigger('show');
		typeof callback == 'function'&&callback();
	}
	function hide($elem,callback){
		if($elem.data('status')=='hide') return;
		if($elem.data('status')=='hidden') return;
		$elem.trigger('hide');
		typeof callback == 'function'&&callback();
	}
	var slient = {
		init:function($elem){
			$elem.removeClass('transition');
			init($elem);
		},
		show:function($elem){
			show($elem,function(){
				$elem.show();
				$elem.trigger('shown').data('status','shown');
			});
		},
		hide:function($elem){
				hide($elem,function(){
				$elem.hide();
				$elem.trigger('hidden').data('status','hidden');
			});
		}
	}
	var js={
		fade:{
			init:function($elem){
				$elem.removeClass('transition');
				init($elem);
			},
			show:function($elem){
				show($elem,function(){
					$elem
				.stop()
				.fadeIn(function(){
					$elem.trigger('shown').data('status','shown');
				});
				});
			},
			hide:function($elem){
				hide($elem,function(){
					$elem
					.stop()
					.fadeOut(function(){
						$elem.trigger('hidden').data('status','hidden');
					});
				});
			}
		},
		slide:{
			init:function($elem){
				$elem.removeClass('transition');
				init($elem);
			},
			show:function($elem){
				show($elem,function(){
					$elem
				.stop()
				.slideDown(function(){
					$elem.trigger('shown').data('status','shown');
				});
				});
			},
			hide:function($elem){
				hide($elem,function(){
					$elem
					.stop()
					.slideUp(function(){
						$elem.trigger('hidden').data('status','hidden');
					});
				});
			}
		},
		slideLeftRight:{
			init:function($elem){
				js._customInin($elem,{
						width:0,
						paddingLeft:0,
						paddingRight:0,
						borderLeftWidth:0,
						borderRightWidth:0,
						opacity:0
					})
			},
			show:function($elem){
				js._customShow($elem);
			},
			hide:function($elem){
				js._customHide($elem,{
							width:0,
							paddingLeft:0,
							paddingRight:0,
							borderLeftWidth:0,
							borderRightWidth:0,
							opacity:0
					})
			},
		}
	}
	js._init=function($elem){
		$elem.removeClass('transition');
		init($elem);
	}
	js._show=function($elem,mode){
		show($elem,function(){
			$elem
		.stop()
		[mode](function(){
			$elem.trigger('shown').data('status','shown');
			});
		});
	}
	js._hide=function($elem,mode){
		hide($elem,function(){
		$elem
		.stop()
		[mode](function(){
			$elem.trigger('hidden').data('status','hidden');
			});
		});
	}
	js._customInin = function($elem,options){
		$elem.removeClass('transition');
		var styles = {};
		for(var key in options){
			styles[key] = $elem.css(key);
		}
		$elem.data('styles',styles)
		init($elem,function(){
			$elem.css(options)
		})
	}
	js._customShow=function($elem){
		$elem.show();
		show($elem,function(){
			$elem
			.stop()
			.animate($elem.data('styles'),function(){
				$elem.trigger('shown').data('status','shown');
			})
		})
	}
	js._customHide=function($elem,options){
		hide($elem,function(){
			$elem
			.stop()
			.animate(options,function(){
				$elem.trigger('hidden').data('status','hidden');
			})
		})
	}

	function getShowHide($elem,options){
		var showHideFn = slient;
		if(options.js){
			showHideFn = js[options.mode]
		}

		showHideFn.init($elem);

		return {
			show:showHideFn.show,
			hide:showHideFn.hide
		}
	}

	var DEFAULTS = {
		js:true,
		mode:'slide'
	}

	$.fn.extend({
		showHide:function(options){
			return this.each(function(){
				var $elem = $(this);
				var showHideObj = $elem.data('showHideObj');
				if(!showHideObj){
					options = $.extend({},DEFAULTS,options);
					showHideObj = getShowHide($elem,options);
					$elem.data('showHideObj',showHideObj);
				}
				if(typeof showHideObj[options]=='function'){
					showHideObj[options]($elem)
				}
			})
		}
	})
})(jQuery);