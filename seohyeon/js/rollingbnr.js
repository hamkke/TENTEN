(function($) {
    $.fn.extend({
        flowBanner: function(options) {

            var defaults = {
                control: false,
                speed: 50,
                ctrlSelector: 'list-ctrl',
                wrapSelector: 'rolling'

            };

            var opt = $.extend(defaults, options);

return this.each(function() {
    var o = opt;
    var left = 0;
    var timer = '';
    var speed = o.speed;
    var ctrlSelector = o.ctrlSelector;
    var wrapSelector = o.wrapSelector;
    var $box = $(this);
    var $banner = $box.children("li");
    var $bannerSize = $banner.length;
    var $bannerW = $banner.outerWidth(true);
    $box.width($bannerW * $bannerSize);
    flowPlay();
    $box.on("mouseenter", function() {
        flowPause();
    }).on("mouseleave", function() {
            flowPlay();
        });


    function flow() {
    if (Math.abs(left) >= $bannerW) {
        left = 0;
        $box.children("li").first().appendTo($box);
    }

    left = left - 1;
    
    $box.css({
        'left': left
        
    });

    }

    function flowPause() {
    clearInterval(timer);
    }

    function flowPlay() {
    timer = setInterval(flow, speed);
    }

});
}
});
})(jQuery);

$(function() {
$(".rolling_list").flowBanner({
    control: true
});
});