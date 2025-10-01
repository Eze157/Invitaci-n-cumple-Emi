const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');

// Cambiar ícono ☰ ↔ ✖
if (navLinks.classList.contains('active')) {
    menuToggle.innerHTML = '<img src="/img/cerrar.png" alt="menu" class="img">';
} else {
    menuToggle.innerHTML = '<img src="/img/lista.png" alt="menu" class="img">';
}
});