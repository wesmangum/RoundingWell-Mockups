$('.content tbody tr').on('click', function() {
    toggleSuperSidebar(this);
});

$(document).on('click', '.content .risk', function() {
    toggleSuperSidebar(this);
    $('.content').toggleClass('half');
});

$('.super-sidebar .close').on('click', function() {
    toggleSuperSidebar();
    $('.content').removeClass('half');
});

$('.super-sidebar .expand').on('click', function() {
    var html = $('.super-sidebar .heading').html();
    html += $('section.profile').html();

    $('.content').addClass('patient-profile half').html(html);

    $('.super-sidebar .heading').animate({
        height: 0
    }, 200);
});

function toggleSuperSidebar(ele) {
    $('.active').removeClass('active');
    if (ele) {
        $(ele).addClass('active');
    }
    $('body').toggleClass('sidebar-active');
}
