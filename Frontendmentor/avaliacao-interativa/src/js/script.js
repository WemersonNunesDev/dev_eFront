const notas = document.querySelector('#avaliacao')
const elementoNota = document.querySelector('.nota')

notas.addEventListener("click", () => {
    elementoNota.classList.toggle("ativo")
})