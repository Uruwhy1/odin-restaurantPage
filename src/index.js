/* COMMON STUFF (HEADER + FOOTER) */
import './reset.css'
import './common.css'

import background from './images/backgroundimage.jpg'
document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundSize = 'cover';
/* ----------- */

// GET CONTAINER ELEMENT
let contentContainer = document.body.querySelector('#content');

// GET BUTTONS
let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let aboutButton = document.querySelector('.about');
let contactButton = document.querySelector('.contact');

/* PAGE MODULE IMPORTS */
import './homepage.css';
import homepageModule from './homepage.js'

import './about.css';
import aboutModule from './about.js';

import './menu.css';
import menuModule from './menu.js';

import './contact.css';
import contactModule from './contact.js';
/* ------------------------- */

/* EVENT LISTENERS */

document.addEventListener('DOMContentLoaded', (event) => {
    contentContainer.appendChild(homepageModule());
    console.log('test')
})

homeButton.addEventListener('click', (event) => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    animateContent(homepageModule())
})

aboutButton.addEventListener('click', (event) => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    animateContent(aboutModule())
});

menuButton.addEventListener('click', (event) => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    animateContent(menuModule())
});

contactButton.addEventListener('click', (event) => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    animateContent(contactModule())
});

/* ------------------------- */


function animateContent(container) {
    container.style.opacity = "0"
    setTimeout(() => {
        container.style.animation = "fade-in 1s 1"
    }, 1);

    setTimeout(() => {
        container.style.animation = "none"
        container.style.opacity = "1"
    }, 900);

    contentContainer.appendChild(container);
}