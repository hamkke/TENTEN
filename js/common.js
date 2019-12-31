$(document).ready(function(){
    $('.gnb_list li').mouseover(function(){
        $(this).children('.lnb_group').css({'display':'block'});

        $('.lnb_group').mouseleave(function(){
            $('.lnb_group').css({'display':'none'}); 
        });
    });  
    
    $('.gnb_list li').mouseleave(function(){
        $(this).children('.lnb_group').css({'display':'none'});
    }); 
});