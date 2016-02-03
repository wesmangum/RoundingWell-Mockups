var filterToggle = $('.filter-toggle');
var filterRegion = $('.filter-region');

filterToggle.on('click', function() {
    filterRegion.toggleClass('show');
    $('.numbers').toggleClass('show');
});

var optionToggle = $('.option-toggle');
var optionRegion = $('.option-region');

optionToggle.on('click', function() {
    optionRegion.toggleClass('show');
});
