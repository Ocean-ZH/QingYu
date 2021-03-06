/* 
* @Author: Marte
* @Date:   2016-11-04 19:47:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-14 23:05:31
*/

$(document).ready(function(){
    TouchSlide({ 
        slideCell:"#focus",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"leftLoop", 
        autoPlay:true,//自动播放
        autoPage:true //自动分页
    });

/*底部导航显隐开始*/
    var winH=$(window).height();
    var headerH=$('.header').height();
    var winSTbefore=0;
    $(window).scroll(function(event) {
        var winST=$(window).scrollTop();
        var docH=$(document).height();
        if(winST<headerH){
            $('.tabBars').removeClass('tBBhide');
        }else if((winST+winH)==docH){
            $('.tabBars').removeClass('tBBhide');
        }else if(winST>winSTbefore){
            if($('.tabBars').hasClass('tBBhide')!=true){
                $('.tabBars').addClass('tBBhide');
            }
            winSTbefore=winST;
        }else if(winST<winSTbefore){
            if($('.tabBars').hasClass('tBBhide')){
                $('.tabBars').removeClass('tBBhide');
            }
            winSTbefore=winST;
        }
    });
/*底部导航显隐结束*/

    $('.tabBars ul li').click(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
        var tabNum = $(this).index();
        $('.tabBars ul li').each(function(index, el) {
            $(el).find('img').attr({'src':'images/tabBars-0'+(index+1)+'.png'})
        });
        $(this).find('img').attr({'src':'images/tabBars-0'+(tabNum+1)+'-selected.png'});

    });
});