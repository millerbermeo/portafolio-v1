window.onload=inicio;

function inicio() {
    let btn = document.querySelector('.logos');
    let nav = document.querySelector('.nav-menu');
    let menu = document.querySelector('.logo')
    let menu2 = document.querySelector('.logo2')

    btn.addEventListener('click', ()=> {
        if(nav.classList.contains('noactive')) {
            nav.classList.add('active')
            nav.classList.remove('noactive')
            
            menu.classList.add('quitar')
            menu2.classList.add('poner')
            
        } else {
            nav.classList.remove('active')
            nav.classList.add('noactive')

            menu2.classList.remove('poner')
            menu.classList.remove('quitar')
        }
    })
}