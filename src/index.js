/* COMMON STUFF (HEADER + FOOTER) */
import './reset.css'
import './common.css'

import background from './images/backgroundimage.jpg'
document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundSize = 'cover';
/* ----------- */

// GET CONTAINER ELEMENT
let contentContainer = document.body.querySelector('#content');

/* HOME PAGE */
import './homepage.css';
import homepage from './homepage.js';
contentContainer.appendChild(homepage())
