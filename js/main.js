const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', toggleMenu);

//function toggleMenu() {
//  if (menu.style.visibility === 'hidden') {
//    menu.style.visibility = 'visible';
//  } else if (menu.style.visibility === 'visible') {
//    menu.style.visibility = 'hidden';
//  }
//}

function toggleMenu() {
 menu.classList.toggle('show');
}