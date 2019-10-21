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

    $('.gnb_list > li > a').mouseover(function(){
        if(!$(this).parent().hasClass('show')){
            $('.gnb_list > li').removeClass('show');
            $(this).parent().addClass('show');
        }
    });

    $('.gnb_list > li > a').mouseover(function(){
        
    });
});