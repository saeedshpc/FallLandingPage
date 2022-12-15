const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const mobileLink1 = document.getElementById('m-nav-link-1');
const mobileLink2 = document.getElementById('m-nav-link-2');
const mobileLink3 = document.getElementById('m-nav-link-3');

btn.addEventListener("click", navToggle);

mobileLink1.addEventListener("click", navToggle);
mobileLink2.addEventListener("click", navToggle);
mobileLink3.addEventListener("click", navToggle);


function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}