var filterToggle = $('.filter-toggle');
var filterRegion = $('.filter-region');

filterToggle.on('click', function() {
    filterRegion.toggleClass('show');
});

var optionToggle = $('.option-toggle');
var optionRegion = $('.option-region');

optionToggle.on('click', function() {
    optionRegion.toggleClass('show');
});

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 226,
    'tolerance': 70
});

$('.menu').on('click', function() {
    slideout.toggle();
});

$('section.main tbody tr').on('click', function() {
    $('tr.active').removeClass('active');
    $(this).addClass('active');
    $('body').toggleClass('sidebar-active');
});

$('.super-sidebar .close').on('click', function() {
    $('tr.active').removeClass('active');
    $('body').removeClass('sidebar-active');
});
