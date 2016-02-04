var $panel = $('.panel');
var $superSidebar = $('.super-sidebar');

$('.menu-toggle').on('click', function() {
    if ($panel.hasClass('open')) {
        $panel.velocity({ marginLeft: '0' });
        $superSidebar.velocity({ width: '+=113px' });
    } else {
        $panel.velocity({ marginLeft: '226px' });
        $superSidebar.velocity({ width: '-=113px' });
    }

    $panel.toggleClass('open');
});

$(window).on('resize', function() {
    var width = $panel.outerWidth();
    $superSidebar.css('width', width / 2);
});
