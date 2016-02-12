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
