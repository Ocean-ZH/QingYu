/* 
* @Author: Marte
* @Date:   2016-11-04 19:47:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-13 04:16:07
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

    var bookshelfPages=new pageSwitch('mainPages',{
        direction:0,
        transition:'scrollX'
    });

    $('.tabNav ul li').click(function(event) {
        $(this).addClass('current').siblings('li').removeClass('current');
        bookshelfPages.slide($(this).index());
    });

    bookshelfPages.on('before',function(a,b){
            $('.tabNav ul li').eq(b).addClass('current').siblings('li').removeClass('current');
    });
});