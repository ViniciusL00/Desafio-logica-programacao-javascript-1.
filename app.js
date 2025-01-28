alert ('Bem-vindo ao nosso site!');

let nome = "Lua";
let idade = 25;

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro, preencha todos os campos';
alert (mensagemDeErro);

nome= prompt('Digite o seu nome');
if (nome == "Lua") {
    alert('Pode tirar a habilitação!');
}else{
    alert('Não pode tirar a habilitação!');
}

idade= prompt('Digite a sua idade');
if (idade >= 18) {
    ('Pode tirar habilitação!');
}else {
    alert('Não pode tirar habilitação!');
}