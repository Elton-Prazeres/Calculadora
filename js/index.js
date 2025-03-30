function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
}// função para capturar o numero digitado

function clean() {
    document.querySelector(".tela").innerHTML = "";
}//função de limpar o screen da calculadora

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(
        0,
        tela.length - 1
    );
}//função limpar o valor em length-1

function somar () {
    let tela = document.querySelector('.tela').innerHTML;
    if(tela) {
        document.querySelector('.tela').innerHTML = eval(tela);
    } else {
        document.querySelector('.tela').innerHTML = "nenhum comando..."
    }
}//função somar e operar por eval(tela)