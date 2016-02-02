$('section.main tbody tr').on('click', function() {
    $('tr.active').removeClass('active');
    $(this).addClass('active');
    $('body').toggleClass('sidebar-active');
});

$('.super-sidebar .close').on('click', function() {
    $('tr.active').removeClass('active');
    $('body').removeClass('sidebar-active');
});
