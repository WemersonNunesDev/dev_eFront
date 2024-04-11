let valores = []

function jogar() {
    let listaResultado = document.querySelector('select#lista-resultados')
    let jogar = Math.floor(1 + 6 * Math.random())

    let item = document.createElement('option')
    item.text = `Resultado: ${jogar}`
    listaResultado.appendChild(item)
}

function lancar() {
    for (valores.length = 0; valores <= 5; valores++) {
        var resultado = document.querySelector('div#resultado')
        let jogar = Math.floor(1 + 6 * Math.random())

        resultado.innerHTML += `<p>Resultado: ${jogar}</p>`
    }
    resultado++

    let
    
}
