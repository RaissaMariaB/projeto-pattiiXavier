const clicarImagem = document.querySelector('.eventos__imagem--one')
let apareceSlide = document.querySelector('#eventos__slide')


apareceSlide.setAttribute('class', 'esconder-slide')

clicarImagem.addEventListener("click", function(evento) {
    // if ((apareceSlide.classList.contains())) {
    apareceSlide.classList.remove('esconder-slide')
})