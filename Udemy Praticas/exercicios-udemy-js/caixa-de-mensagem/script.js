const backdropElement = document.getElementById('backdrop')
const modalLinkElements = document.querySelector('.info-modal')
let infoModal;

function toggleBackdrop() {
    backdropElement.classList.toggle('visible')
}

function presentInfoModal(event) {
    const text = event.target.dataset.text;
    toggleBackdrop();
    infoModal = document.createElement('div');
    infoModal.classList.add('modal')
    infoModal.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>`
}