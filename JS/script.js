
//funçao para mudar o nome do home na barra de navegaçao
const para = document.querySelector(".nome");

para.addEventListener('click', atualizarNome);

function atualizarNome(){
    var nome = prompt('Insira seu nome');
    if(nome.length <= 10){
        if(nome === '' ){
            para.textContent = 'Tudo bem então ╮(╯-╰)╭ ' 
        }
        else{
            para.textContent = 'Seja bem vindo(a)  ' + nome + '!';
        }
    }
    else{
        alert("O limite de caracteres é 10")
    }
    
    
}

