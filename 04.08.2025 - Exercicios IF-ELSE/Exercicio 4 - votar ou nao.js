//Exercício 4 - Faça um programa que leia o ano de nascimento de uma pessoa e calcule a idade dela e mostre se ela pode votar ou não
let anoNasc = parseInt(prompt("Digite o ano de seu nascimento: "));
let idadeAtual = new Date().getFullYear() - anoNasc;
alert(" Sua idade atual é: " + idadeAtual + " anos. ");

if (idadeAtual >= 16) {
    alert(" Você pode votar. ");
}
else {
    alert(" Você não pode votar. ")
}
