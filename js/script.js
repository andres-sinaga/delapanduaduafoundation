// toggle class active
const navbarNav = document.querySelector ('.navbar-nav1')
document.querySelector('#Hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active')
}

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#Hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})