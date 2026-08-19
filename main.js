const numeroSenha=document.querySelector('.parametro-_texto');
numeroSenha.textContent=12;//variavel que pode ser alterada

numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('parametro-senha_botao');

botoes[0].onclick=diminiuTamanho;
function diminiuTamanho() {
    if (tamanhoSenha>1) {
        
    }
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}

botoes(1).onclick=aumentaTamanho;
function aumentaTamanho(){
tamanhoSenha=tamanhoSenha+1
numeroSenha.textContent=tamanhoSenha;
}