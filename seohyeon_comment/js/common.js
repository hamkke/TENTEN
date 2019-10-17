// $(document).ready(function(){
//     $('.gnb_list li').mouseover(function(){
//         $('.gnb_list li').mouseleave(function(){
//             $(".lnb_group").hide();
//         });
//         $(".lnb_group",this).stop().slideDown(100)
//         $('.lnb_group').mouseleave(function(){
//             $(".lnb_group").hide();
//         });
//     });
// });

$(document).ready(function(){
    $('.gnb_list li').mouseover(function(){
        $(this).addClass('show');
    });
    $('.gnb_list li').mouseleave(function(){
        $('.gnb_list li').removeClass('show');
    });
    if($('.gnb_list li').hasClass('show')){
        $(this).children('.lnb_group').slideDown(100)
    }else{
        $(this).children('.lnb_group').slideUp(100)
    }
});