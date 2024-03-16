let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

function noConsole() {
    console.log('O botão foi clicado');
}

function alerta() {
    alert('Eu amo JS');
}

function interacao() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function soma() {
    var num1 = parseInt(prompt('Informe o primeiro número: '));
    var num2 = parseInt(prompt('Informe o segundo número: '));
    var soma = num1 + num2;
    alert(`A soma é: ${soma}`);
}