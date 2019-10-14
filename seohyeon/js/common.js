$ (document).ready(function(){


    
    $(".gnb_list li",this).mouseenter(function(){
        $('.lnb_group',this).stop().slideDown(100)

        $('.lnb_group',this).mouseleave(function(){
            $('.lnb_group').hide()
        })
       
        
        
    })
    $('.gnb_list li',this).mouseleave(function(){
        $('.lnb_group').hide()
    })
    
    
})