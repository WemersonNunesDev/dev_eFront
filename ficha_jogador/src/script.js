function criar() {
    var nomeP = document.getElementById('txtpersonagem')
    var jogadorP = document.getElementById('txtjogador')
    var racaP = document.getElementById('raca-play')
    var origemP = document.getElementById('origem-play')
    var classeNivelP = document.getElementById('classe-play')
    var divindadeP = document.getElementById('divindade-play')
    var ficha = document.getElementById('ficha')

    var personagem = String(nomeP.value)
    var jogador = String(jogadorP.value)
    var raca = String(racaP.value)
    var origem = String(origemP.value)
    var classe = String(classeNivelP.value)
    var divindade = String(divindadeP.value)

    ficha.innerHTML = `
    <h2>FICHA</h2>
    <div id="nomes">
        <dl>
            <dt>${personagem}</dt>
            <dd>Personagem</dd>
            <dt>${jogador}</dt>
            <dd>Jogador</dd>
        </dl>
    </div>
    <div id="carc-pers">
        <dl>
            <dt>${raca}</dt>
            <dd>Raça</dd>
            <dt>${origem}</dt>
            <dd>Origem</dd>
            <dt>${classe}</dt>
            <dd>Classe & Nível</dd>
            <dt>${divindade}</dt>
            <dd>Divindade</dd>
        </dl>
    </div>
    `
}