window.onload=inicio;


function cambiar() {
    document.getElementById('nombre').style.color="#250bdf"
    document.getElementById('typing').style.color="#250bdf"
    document.getElementById('home').style.color="#250bdf"
    document.getElementById('house').style.color="#250bdf"
}

function mostrar() {
    document.getElementById('porta-2').style.display="none"
    document.getElementById('info').style.display="grid"
    document.getElementById('portafolio').style.display="block"
}

function mostrardos() {
    document.getElementById('info').style.display="none"
    document.getElementById('portafolio').style.display="none"
    document.getElementById('porta-2').style.display="block"
}

function mostrartres() {
    document.getElementById('info').style.display="grid"
    document.getElementById('porta-2').style.display="none"
}

function inicio () {
    const toglebtn = document.querySelector('.border');

    toglebtn.addEventListener('click', function () {
    document.getElementById('nav-lateral').classList.toggle('active')
    })
}




