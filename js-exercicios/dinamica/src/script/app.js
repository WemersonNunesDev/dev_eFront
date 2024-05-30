const backdropElement = document.getElementById('backdrop')
const modalLinksElements = document.querySelectorAll('.info-modal')
let infoModal; //variável indefinida

function toggleBackdrop() {
    backdropElement.classList.toggle('visible') //add a clase visible
}

function presentInfoModal(event) {
    const text = event.target.dataset.text
    toggleBackdrop()
    infoModal = document.createElement('div')//definindo a variável
    infoModal.classList.add('modal')//add uma clase à variável
    infoModal.innerHTML = `
        <h2>More Details</h2>
        <p>${text}</p>`
    const closseButton = document.createElement('button')
    closseButton.addEventListener('click', hideInfoModal)
    closseButton.textContent = 'Okay'
    infoModal.appendChild(closseButton)//add um botão criado anteriormente ao elemento div
    document.body.appendChild(infoModal)//add o elemento div ao corpo do meu codigo HTML
}

function hideInfoModal() {
    toggleBackdrop()
    document.body.removeChild(infoModal)//Quando clicar fora do elemento, o div que antes foi add agora será removido
}

for (const linkElement of modalLinksElements) {
    linkElement.addEventListener('click', presentInfoModal)//aqui chama o elemento criado em js quando for clicado
}

backdropElement.addEventListener('click', hideInfoModal)//aqui remove ele mais uma vez