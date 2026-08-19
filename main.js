const numeroSenha = document.querySelector('parametro-senha-texto');
let tamanhoSenha=12;//variavel que pode ser alterada

numeroSenha.textContent=tamanhoSenha;//atribui o tamanho da senha para o numeroSenha
const botoes=document.querySelectorAll('parametro-senha-botao');//seleciona todas
botoes[0].onclick=dinuiTamanho();
botoes[1].onclick=aumentaTamanho();
function dinuiTamanho()  {
    if (tamanhoSenha >1) {
        tamanhoSenha--;
        }
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}


function aumentaTamanho()  {
     if (tamanhoSenha <20) {
        tamanhoSenha++;
        }
    
    numeroSenha.textContent=tamanhoSenha;
}

const CampoSenha=document.querySelector(#campo-senha);
const letrasMaiusculas='ABCDEFG';
geraSenha();
funcion geraSenha(){
    let numeroAleatorio=Math.random()*letrasMaiusculas.length




}