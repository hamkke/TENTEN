$(document).ready(function(){
    
    $('.gnb_list li').mouseover(function(){
        $('.gnb_list li').mouseleave(function(){
            $(".lnb_group").hide()
        })
        $(".lnb_group",this).stop().slideDown(100)
        $('.lnb_group').mouseleave(function(){
            $(".lnb_group").hide()
        })
        
        
        
    })
    
    
})