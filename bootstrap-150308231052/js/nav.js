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

/**
 * “全部导航” 显示左侧导航
 */

//鼠标指向全部导航的事件
$("#allNav").mouseenter(function () {
  $(".nav-main").animate({ width:'show'}, "slow");

});

//鼠标离开"全部导航"的事件
$("#allNav").mouseleave(function () {

  var y = event.clientY;   //鼠标所在位置的高度
  var x = event.clientX;   //鼠标所在位置的宽度
  var divX2 = this.offsetLeft + this.offsetWidth;  //指定区域的宽度
  var divY2 = this.offsetTop + this.offsetHeight;  //指定区域的高度
  if(  x < divX2 && y > divY2){
    $(".nav-main").animate({width: 'show'}, "slow");

  }else {
    $(".nav-main").animate({width: 'hide'}, "slow");
  }

});

//鼠标离开左侧导航的事件
$(".nav-main").mouseleave(function () {

  var y = event.clientY;
  var x = event.clientX;
  var divX2 = this.offsetLeft + this.offsetWidth;
  var divY2 = this.offsetTop + this.offsetHeight;
  if(  x < divX2 && y > divY2){
    $(".nav-main").animate({width: 'show'}, "slow");

  }else {
    $(".nav-main").animate({width: 'hide'}, "slow");
  }

});
