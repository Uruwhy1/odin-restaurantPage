/* COMMON STUFF (HEADER + FOOTER) */
import './reset.css'
import './common.css'

import Logo from './images/logo.png';
let logo = document.querySelector('.logo-image');
logo.src = Logo;

import background from './images/backgroundimage.jpg'
document.body.style.backgroundImage = `url(${background})`;
document.body.style.backgroundSize = 'cover';
/* ----------- */
