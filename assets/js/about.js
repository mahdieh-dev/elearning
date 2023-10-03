function onImageClick(x) {
    document.getElementById('modal-content').innerHTML = `<img src=${x.src} alt=${x.alt}/>`
    document.getElementById('modal').classList.toggle('show')
}

function onModalClose() {
    document.getElementById('modal').classList.toggle('show')
}