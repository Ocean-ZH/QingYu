/* 
* @Author: Marte
* @Date:   2016-11-04 19:47:22
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-15 05:35:32
*/

$(document).ready(function(){
    $('.history p').click(function(event) {
        $('.history li').html('').animate({height:0,border:0},800,function(){
            $('.history p').html('').animate({height:0,border:0},500);
        });
    });

    $('.history li img').click(function(event) {
        $(this).closest('li').html('').animate({height:0,border:0},800);
    });
    $('.header .l img').click(function(event) {
        history.back(-1);
    });
});