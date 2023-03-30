document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['home', 'about', 'rent', 'gallery', 'contact'],
      navigation: true,
      navigationTooltips: ['Почетна', 'О нама', 'Смештај', 'Галерија', 'Контакт']
  });
});

var gallery = document.querySelector('.image-list');
var images = ['images/house1.jpg', 'images/house2.jpg', 'images/house3.jpg'];
var currentIndex = 0;

new fullpage('#fullpage', {
  scrollingSpeed: 70
});

var images = document.querySelectorAll(".image-container img");


function loadImages() { 
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.src = image.dataset.src;
  }
}

// be sure that loadImages method is called 
// when the page is loaded
window.addEventListener("load", loadImages);

