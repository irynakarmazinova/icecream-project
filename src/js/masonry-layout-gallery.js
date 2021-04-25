
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 4
});

$grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  $( this ).toggleClass('grid-item--gigante');
  // trigger layout
  $grid.masonry();
});
