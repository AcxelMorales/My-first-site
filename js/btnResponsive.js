document.getElementById('btn').addEventListener('click', btnRes)

function btnRes() {
    
    if (nav.classList[1] == 'mostrar') {
        nav.classList.remove('mostrar')
    } else {
        nav.classList.add('mostrar')
    }
}
