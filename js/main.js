ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [7.890749861015384,98.29471855302582],
    zoom: 17,
  })
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // Управление клавиатурой
  keyboard: true,
});
