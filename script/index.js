"use strict";

const toggleNavButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
function toggleNav() {
    menu.classList.toggle('menu-show')
}

toggleNavButton.addEventListener('click',toggleNav);