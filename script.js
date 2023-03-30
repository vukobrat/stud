// Initialize fullpage.js when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      scrollingSpeed: 7000,
      anchors: ['home', 'about', 'rent', 'gallery', 'contact'],
      navigation: true,
      navigationTooltips: ['Почетна', 'О нама', 'Смештај', 'Галерија', 'Контакт']
  });
});

// Get the gallery element and the images to display
var gallery = document.querySelector('.image-list');
var images = ['images/house3.jpg', 'images/house2.jpg', 'images/house4.jpg'];
var currentIndex = 0;
// Get all image links inside image-container elements and load the actual images on page load
var images = document.querySelectorAll(".image-container a");

// Loop through all the image links and set their source attribute to the value of their data-src attribute
function loadImages() { 
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.src = image.dataset.src;
  }
}

// Ensure that the loadImages function is called when the page is loaded
window.addEventListener("load", loadImages);

