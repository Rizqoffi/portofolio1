// Toggle Kelas Aktif
const navbarNav = document.querySelector ('.navbar-nav');
// Ketika Hamburger Menu Diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}


// Klik di Luar Sidebar untuk Keluar Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});