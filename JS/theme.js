const botao = document.querySelectorAll('label');
const teme = document.querySelector('body');

function changeText(){
//mudar icone
    var link = document.querySelector(".tema");

    if(link.innerHTML === '🌚'){
        link.innerHTML = '🌞';
    }else{
        link.innerHTML = '🌚';
    }
//mudar os botoes
    botao.forEach(botao =>{
        botao.classList.toggle('btn-outline-dark');
        botao.classList.toggle('btn-outline-light');
    })
//mudar o tema de fundo
    teme.classList.toggle('bg-dark');
    teme.classList.toggle('text-white');


}
