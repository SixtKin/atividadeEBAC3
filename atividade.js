const form = document.getElementById('comparador');

function compararCampo () {
    const numeroA = document.getElementById('numeroA').value
    const numeroB = document.getElementById('numeroB').value
    const alert = document.getElementById('alert')

    if (parseFloat(numeroA) >= parseFloat(numeroB)){
        document.querySelector('.error-message').classList.remove('hidden')
        document.querySelector('.success-message').classList.add('hidden')
    } else {
        document.querySelector('.success-message').classList.remove('hidden')
        document.querySelector('.error-message').classList.add('hidden')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    compararCampo()
})
