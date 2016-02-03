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
