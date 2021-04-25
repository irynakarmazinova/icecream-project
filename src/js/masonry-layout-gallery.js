// $(document).ready(function(){ 
// 	$('.grid').masonry({
// // указываем элемент-контейнер в котором расположены блоки для динамической верстки
// 	    itemSelector: '.grid-item',
// // указываем класс элемента являющегося блоком в нашей сетке
//         singleMode: false,
// // перестраивает блоки при изменении размеров окна
//         isAnimated: true,
// // анимируем перестроение блоков
//         animationOptions: { 
// 	    queue: false, 
// 	    duration: 500 },
// // опции анимации - очередь и продолжительность анимации
//         gutter: 5
// 	}); 
//   });


$('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 4,
});