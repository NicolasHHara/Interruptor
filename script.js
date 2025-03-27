const btnOn = document.getElementById('On');
const btnOff = document.getElementById('Off');
const img = document.getElementById('inicial'); // Aqui está correto

function imgOff() {
    img.src = './img/lampada_desligada.png'; // Alterado de 'initial' para 'img'
}

function imgOn() {
    img.src = './img/lampada_ligada.png'; // Alterado de 'initial' para 'img'
}

btnOn.addEventListener('click', imgOn);
btnOff.addEventListener('click', imgOff);

