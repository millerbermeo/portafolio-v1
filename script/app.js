function cambiar() {
    document.getElementById('nombre').style.color="blue"
    document.getElementById('typing').style.color="blue"
    document.getElementById('home').style.color="blue"
    document.getElementById('house').style.color="blue"
}

function mostrar() {
    document.getElementById('portafolio').style.display="block"
}

const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('toggle-menu');


toggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle(cambiar());
})