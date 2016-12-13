/* 
* @Author: Marte
* @Date:   2016-11-04 19:47:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-06 00:10:32
*/

$(document).ready(function(){
    $('.tabBars ul li').click(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
        var tabNum = $(this).index();
        $('.tabBars ul li').each(function(index, el) {
            $(el).find('img').attr({'src':'images/tabBars-0'+(index+1)+'.png'})
        });
        $(this).find('img').attr({'src':'images/tabBars-0'+(tabNum+1)+'-selected.png'});
    });

    var bannerplay=new pageSwitch('bannerbox',{
        direction:0,
        transition:'slice',
        loop:true,
        autoplay:true,
        interval:2000,
    });


    bannerplay.on('before',function(a,b){
        $('.bannerbg ol li').eq(b).addClass('current').siblings('li').removeClass('current');
    });

    var bookshelfPages=new pageSwitch('mainPages',{
        direction:0,
        transition:'scrollX', 
    });

    $('.tabNav ul li').click(function(event) {
        $(this).addClass('current').siblings('li').removeClass('current');
        bookshelfPages.slide($(this).index());
    });

    $('.bannerbg').on('touchstart',function (event) {
            bookshelfPages.freeze(true);
    });

    $('.bannerbg').on('touchend',function (event) {
            bookshelfPages.freeze(false);
    });

    bookshelfPages.on('before',function(a,b){
            $('.tabNav ul li').eq(b).addClass('current').siblings('li').removeClass('current');
    });

    bookshelfPages.on('after',function(a,b){
            if(a==1){
                $('.main').css({'height':'15rem'});
            }else{
                $('.main').css({'height':'17.786666666667rem'});
            }
    });

    $('.likenum').click(function(event) {
        $(this).toggleClass('current');
        if($(this).hasClass('current')){
            $(this).html('<p>64</p>');
        }else{
            $(this).html('<p>63</p>');
        }
    });
      
});