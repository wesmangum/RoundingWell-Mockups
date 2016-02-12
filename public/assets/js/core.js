var $filterToggle = $('.filter-toggle');
var $filterRegion = $('.filter-region');
var $optionToggle = $('.option-toggle');
var $optionRegion = $('.option-region');

$filterToggle.on('click', function() {
    $filterRegion.toggleClass('show');
    $('.numbers').toggleClass('show');
});

$optionToggle.on('click', function() {
    $optionRegion.toggleClass('show');
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

$(window).on('resize', function() {
    var width = $panel.outerWidth();
    $superSidebar.css('width', width / 2);
});

var $superSidebar = $('.super-sidebar');
var $content = $('.content');

$content.find('tr').on('click', function() {
    toggleSuperSidebar(this);
    toggleProfileOverview();
});

$(document).on('click', '.content.profile tr', function() {
    toggleSuperSidebar(this);
    toggleHalfView();
});

$(document).on('click', '.content .risk', function() {
    toggleSuperSidebar(this);
    toggleHalfView();
});

$superSidebar.find('.close').on('click', function() {
    toggleSuperSidebar();
    $content.velocity({ width: '100%' }).removeClass('half');
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

function toggleProfileOverview() {
    // Set scroll back to top
    window.scrollTo(0, 0);

    // Set default style variables
    var contentWidth = '50%';
    var headingHeight = '0';
    var borderTop = 'none';

    // Alter style variables if closing superSidebar
    if ($content.hasClass('profile half')) {
        contentWidth = '100%';
        headingHeight = '100%';
        borderTop = '2px solid red';
    }

    // Swap html between sections
    var newHtml = $('section.store .header-tab').html() + $('section.store .risks').html();
    $content.velocity({ width: contentWidth }).html(newHtml);

    // Make changes to SuperSidebar profile
    $superSidebar.find('.heading').velocity({ height: headingHeight });
    $superSidebar.find('.risk-status').css('border-top', borderTop);

    // Set active Risk when overview is present
    toggleActive($content.find('.risk:first-of-type'));

    // Finally, toggle classes for next function call
    $content.toggleClass('profile half');
}

var $content = $('.content');
var $store = $('section.store');

$(document).on('click', '.content .dashboard span', function() {
    switchTab(this);
});

function switchTab(ele) {
    var switchTo = $(ele).data('section');
    var newHtml = $store.find('.' + switchTo)[0].outerHTML;
    newHtml = $store.find('.header-tab').html() + newHtml;

    $content.html(newHtml);

    $('.dashboard span').removeClass('current');
    $('.dashboard span[data-section="' + switchTo + '"]').addClass('current');
}

$.Velocity.defaults.easing = 'easeInOut';
$.Velocity.defaults.duration = 200;
$.Velocity.defaults.queue = false;
