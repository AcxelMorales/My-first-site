let nav = document.querySelector('.navegacion')
// let btn = document.getElementById('btn-contact')
let btnHero = document.getElementById('btn-contact-hero')
let cerrar = document.getElementById('cerrar')


// btn.addEventListener('click', modal)
btnHero.addEventListener('click', modal)

function modal() {
    document.getElementById('modal').style.display = 'block'
}

cerrar.addEventListener('click', close)

function close() {
    document.getElementById('modal').style.display = 'none'
}
