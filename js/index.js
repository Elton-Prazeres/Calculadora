function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
}

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(
        0,
        tela.length - 1
    );
}