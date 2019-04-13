"use strict";

var mainNav = document.querySelector(".main-nav");
var toggleBtn = mainNav.querySelector(".main-nav__toggle")
mainNav.classList.remove("main-nav--nojs");
function toggleMenu() {
  mainNav.querySelector(".main-nav__dropdown").classList.toggle("main-nav__dropdown-show");
  toggleBtn.classList.toggle("main-nav__toggle--open");
}
toggleBtn.onclick = toggleMenu;

var touchLinks = mainNav.querySelectorAll('.touch-link');

[].forEach.call(touchLinks, function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    item.previousElementSibling.classList.toggle('rotate');
    item.nextElementSibling.classList.toggle('show-touch');
  })
})

//Попап
if(document.querySelector(".main-block__modal-btn")) {
  var link = document.querySelectorAll(".main-block__modal-btn");
  var popupContent = document.querySelector(".modal-dialog");
  var popupOverlay = document.querySelector(".modal-overlay");
  [].forEach.call(link, function(item) { //для IE
    item.addEventListener("click", function(event) {
      event.preventDefault();
      popupContent.classList.add("modal-dialog--open");
      popupOverlay.classList.add("modal-overlay--open");
    });
  });

  popupOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    popupContent.classList.remove("modal-dialog--open");
    popupOverlay.classList.remove("modal-overlay--open");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popupContent.classList.remove("modal-dialog--open");
      popupOverlay.classList.remove("modal-overlay--open");
    }
  });
};