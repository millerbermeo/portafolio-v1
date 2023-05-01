let chat = document.querySelector('.chat');
let ana = document.querySelector('.ana');

let menu = document.querySelector('#menu1');
let desplegable = document.querySelector('.nav-desplegable');

let cerrar = document.querySelector('.img-cerrar');
let x = document.querySelector('.x')

let imagenes = ['2.pgn', '1.jpg', '3.jpg', '1.jpg'];
let cont = 0;

function carousel(contenedor) {
    contenedor.addEventListener('click', e=> {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('.carusel')[5],
        tgt = e.tarjet;

        if (tgt == atras) {
            if(cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if(cont < imagenes.length -1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}


ana.addEventListener('click', ()=> {
    chat.classList.toggle('active')
    ana.style.opacity="0%"
})

x.addEventListener('click', ()=> {
    chat.classList.toggle('active')
    ana.style.opacity="100%"
})

cerrar.addEventListener('click', ()=> {
    chat.classList.toggle('active')
    ana.style.opacity="100%"
})

menu.addEventListener('click', ()=> {
    desplegable.classList.toggle('desplegar')
})


document.addEventListener("DOMContentLoaded", ()=> {
    let contenedor = document.querySelector('.contenedor');
    carousel(contenedor);
})

