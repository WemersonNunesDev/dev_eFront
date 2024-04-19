/*const btnSubmit = document.getElementById('submit')
let formulario = document.querySelectorAll('.btn-preenchimento')
btnSubmit.addEventListener('click', () => {
    if(formulario.value == 0) {
        alert('Por favor, preencha o formulario.')
    }else{
        alert('Tudo ok')
    }
})*/

const submit = document.getElementById('submit')
let formulario = {
    nome: document.getElementById('nome'),
    lastName: document.getElementById('last-name'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
}

submit.addEventListener('click', () => {
    if(formulario.nome.length == 0) {
        alert('Por favor, prencha o campo "Name".')
    }else if(formulario.lastName.length == 0) {
        alert('Preencha o corretamente.')
    }
})