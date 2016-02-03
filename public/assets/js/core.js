var filterToggle = $('.filter-toggle');
var filterRegion = $('.filter-region');
var optionToggle = $('.option-toggle');
var optionRegion = $('.option-region');

filterToggle.on('click', function() {
    filterRegion.toggleClass('show');
    $('.numbers').toggleClass('show');
});

optionToggle.on('click', function() {
    optionRegion.toggleClass('show');
});

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

var $superSidebar = $('.super-sidebar');
var $content = $('.content');

$('.content tbody tr').on('click', function() {
    toggleSuperSidebar(this);
});

$(document).on('click', '.content .risk', function() {
    toggleSuperSidebar(this);
    toggleHalfView();
});

$('.super-sidebar .close').on('click', function() {
    toggleSuperSidebar();
    $content.velocity({ width: '100%' }).removeClass('half');
});

$('.super-sidebar .expand').on('click', function() {
    var html = $('section.profile').html();
    $content.css({ width: '50%' }).addClass('patient-profile half').html(html);
    $('.super-sidebar .heading').velocity({ height: 0 });
    $('.super-sidebar .risk-status').css('border-top', 'none');
    toggleActive($content.find('.risk:first-of-type'));
});

function toggleSuperSidebar(ele) {
    var right;
    if ($superSidebar.hasClass('open')) {
        toggleActive();
        right = '-51%';
    } else {
        toggleActive(ele);
        right = '0%';
    }
    $superSidebar.velocity({ right: right });
    $superSidebar.toggleClass('open');
}

function toggleActive(ele) {
    var $active = $('.active');
    if ($active) {
        $active.removeClass('active');
    }
    if (ele) {
        $(ele).addClass('active');
    }
}

function toggleHalfView() {
    var width = $content.hasClass('half') ? '100%' : '50%';
    $content.velocity({ width: width });
    $content.toggleClass('half');
}

$.Velocity.defaults.easing = 'easeInOut';
$.Velocity.defaults.duration = 200;
$.Velocity.defaults.queue = false;
