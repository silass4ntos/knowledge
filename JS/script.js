
//funçao para mudar o nome do home na barra de navegaçao
const para = document.querySelector(".nome");

para.addEventListener('click', atualizarNome);

function atualizarNome(){
    var nome = prompt('Insira seu nome');
    para.textContent = 'Seja bem vindo  ' + nome + '!';
}

