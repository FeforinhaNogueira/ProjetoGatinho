// criação de objetos
imgGatos = document.getElementById('imgGatos');
btnDancar = document.getElementById('btnDancar');
btnParar = document.getElementById('btnParar');
musica = new Audio('./som/musica.mp3');

// Respondendo os eventos
btnDancar.addEventListener('click', () => {
    imgGatos.src = "./img/gatinhodance.gif";
    grito.play();
});

btnParar.addEventListener('click', () => {
    imgGatos.src = './img/gatinho.gif';
    grito.pause();
});
