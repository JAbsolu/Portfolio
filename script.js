const toggle_menu = document.querySelector(".hamburger_toggle");
const hamburger = document.querySelectorAll(".hamburger__menu");
const show_nav = document.querySelector(".navigation");

toggle_menu.addEventListener('click', () => {
    hamburger.forEach(bar => {
        bar.classList.toggle('active');
    })
    show_nav.classList.toggle("active");
});
