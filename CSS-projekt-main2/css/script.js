const hamburger = document.getElementById('hamburger')
const navbarLinks = document.getElementById('navbar-links')


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navbarLinks.classList.toggle('active')
})

