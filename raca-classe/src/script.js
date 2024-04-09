function criar_lista() {
    var listaNomes = ["Wemerson", "Alice", "Davi"]
    

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `Quantidade de nomes é de ${listaNomes.length}`
    for (let pessoa in listaNomes) {
        resultado.innerHTML = `Pessoa ${pessoa} é ${listaNomes[pessoa]}`
    }
}

var numero = [1, 2, 3, 4, 5]
numero.push(6, 7, 8, 9, 10)

console.log(`Quantidade de elementos: ${numero.length}`)
for (let elemento in numero) {
    console.log(`Índice ${elemento} responde ao elemento ${numero[elemento]}`)
}