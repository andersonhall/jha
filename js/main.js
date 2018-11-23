const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menu.style.visibility = 'hidden';
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log('clicking')
  if (menu.style.visibility === 'hidden') {
    console.log('v');
    menu.style.visibility = 'visible';
  } else if (menu.style.visibility === 'visible') {
    console.log('h');
    menu.style.visibility = 'hidden';
  }
}