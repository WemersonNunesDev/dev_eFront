let min = 1
let max = 20
let dado = Math.floor(Math.random() * (max - min + 1)) + min
let historicoResultado = document.querySelector('select#historico-de-rolagens')

function jogar_d20() {
    let rolagensD20 = []
    rolagensD20.push(Number(dado.value))
    let item = document.createElement('option')
    item.text = `Resultado: ${dado}`
    historicoResultado.appendChild(item)
    dado.value = ''
}