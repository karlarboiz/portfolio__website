"use strict";

const toggleNavButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
function toggleNav() {
    if(menu.classList.contains('menu-visible')) {
        menu.className = 'menu-show'
    }
    else if(menu.classList.contains('menu-show')) {
        menu.className = 'menu-visible'
    }
}

toggleNavButton.addEventListener('click',toggleNav);

window.addEventListener('resize',function(e){
    e.preventDefault();
    const windowWidth = e.target.innerWidth;

    if(windowWidth > 768 && menu.classList.contains('menu-show')) {
        menu.className = 'menu-visible'
    }else {return;}

})