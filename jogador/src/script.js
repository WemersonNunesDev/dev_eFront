const botao = document.querySelector('.btn-raca')
const elementoHabilidade = document.querySelector('.btn-raca .txt-habilidade')

botao.addEventListener("click", () => {
    elementoHabilidade.classList.toggle("ativo")
})
