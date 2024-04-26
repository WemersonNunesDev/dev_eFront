const btnSubmit = document.getElementById('submit')
let formulario = document.querySelectorAll('.btn-preenchimento')
btnSubmit.addEventListener('click', () => {
    if(formulario.length == 0 && formulario.value == 0) {
        alert('Por favor, preencha o formulario.')
    }else{
        alert('Tudo ok')
    }
})