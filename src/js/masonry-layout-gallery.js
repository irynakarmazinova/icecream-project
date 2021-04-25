
var $grid = $('.grid').masonry({
    itemSelector: '.grid__item',
    gutter: '.gutter_sizer'
});

$grid.on( 'click', '.grid__item', function() {
  // change size of item via class
  $( this ).toggleClass('grid__item_gigante');
  // trigger layout
  $grid.masonry();
});
