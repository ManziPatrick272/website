let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('bx bx-menu');
    navbar.classList.toggle('open');}