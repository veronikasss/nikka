const text = document.getElementById("title");
const prog = "8 КАДЕТСКИЙ КЛАСС";
let idx = 1;


setInterval(()=> {
    text.innerText = prog.slice(0, idx);
    idx++;
}, 250);


const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.header__menu-list');


menuBtn.addEventListener('click',()=> {
    menuMobile.classList.toggle('menu-open');
} )