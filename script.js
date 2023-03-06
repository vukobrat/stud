document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['home', 'about', 'rent', 'gallery', 'contact'],
      navigation: true,
      navigationTooltips: ['Home', 'About Us', 'Rent', 'Gallery', 'Contact']
  });
});

var gallery = document.querySelector('.image-list');
var images = ['images/house1.jpg', 'images/house2.jpg', 'images/house3.jpg'];
var currentIndex = 0;

new fullpage('#fullpage', {
  scrollingSpeed: 100
});

var images = document.querySelectorAll(".image-container img");

