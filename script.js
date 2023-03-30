document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      scrollingSpeed: 7000,
      anchors: ['home', 'about', 'rent', 'gallery', 'contact'],
      navigation: true,
      navigationTooltips: ['Почетна', 'О нама', 'Смештај', 'Галерија', 'Контакт']
  });
});

var gallery = document.querySelector('.image-list');
var images = ['images/house3.jpg', 'images/house2.jpg', 'images/house4.jpg'];
var currentIndex = 0;

var images = document.querySelectorAll(".image-container a");


function loadImages() { 
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.src = image.dataset.src;
  }
}

// be sure that loadImages method is called 
// when the page is loaded
window.addEventListener("load", loadImages);

