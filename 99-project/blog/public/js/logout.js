//js文件保存在服务器端,但是最终会被请求到客户端,由客户端来解析执行
;(function($){
    $('#logout').on('click',function(){
        $.ajax({
            url:'/user/logout'
        })
        .done(function(result){
               window.location.href = '/'
            })
            .fail(function(err){
                alert("请求失败,请稍后再试")
            })
    })
})(jQuery);