/* 
* @Author: Marte
* @Date:   2016-11-04 19:47:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-06 11:06:18
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

    $('.tabBars ul li').click(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
        var tabNum = $(this).index();
        $('.tabBars ul li').each(function(index, el) {
            $(el).find('img').attr({'src':'images/tabBars-0'+(index+1)+'.png'})
        });
        $(this).find('img').attr({'src':'images/tabBars-0'+(tabNum+1)+'-selected.png'});

    });
});