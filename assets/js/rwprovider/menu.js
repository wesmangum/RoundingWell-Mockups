var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 226,
    'tolerance': 70
});

$('.menu').on('click', function() {
    slideout.toggle();
});
