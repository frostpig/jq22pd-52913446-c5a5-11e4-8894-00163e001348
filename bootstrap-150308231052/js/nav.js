/**
 * 头部导航
 */
jQuery(document).ready(function(){
  $(".nav-main").hide();
    var qcloud={};

    $('[_t_nav]').hover(function(){

        var _nav = $(this).attr('_t_nav');

        clearTimeout( qcloud[ _nav + '_timer' ] );

        qcloud[ _nav + '_timer' ] = setTimeout(function(){

            $('[_t_nav]').each(function(){

                $(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');

            });

            $('#'+_nav).stop(true,true).slideDown(200);

        }, 150);

    },function(){

        var _nav = $(this).attr('_t_nav');

        clearTimeout( qcloud[ _nav + '_timer' ] );

        qcloud[ _nav + '_timer' ] = setTimeout(function(){

            $('[_t_nav]').removeClass('nav-up-selected');

            $('#'+_nav).stop(true,true).slideUp(200);

        }, 150);

    });

});

/**
 * 左侧导航
 */
$(function(){
    var thisTime;
    $('.nav-ul li').mouseleave(function(even){
        thisTime	=	setTimeout(thisMouseOut,1000);
    });

    $('.nav-ul li').mouseenter(function(){
        clearTimeout(thisTime);
        var thisUB	=	$('.nav-ul li').index($(this));
        if($.trim($('.nav-slide-o').eq(thisUB).html()) != "")
        {
            $('.nav-slide').addClass('hover');
            $('.nav-slide-o').hide();
            $('.nav-slide-o').eq(thisUB).show();
        }
        else{
            $('.nav-slide').removeClass('hover');
        }

    });

    function thisMouseOut(){
        $('.nav-slide').removeClass('hover');
    }

    $('.nav-slide').mouseenter(function(){
        clearTimeout(thisTime);
        $('.nav-slide').addClass('hover');
    })
    $('.nav-slide').mouseleave(function(){
        $('.nav-slide').removeClass('hover');
    });



});

