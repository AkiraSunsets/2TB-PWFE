//Exercício 5 - faça um algoritmo que leia um número e determine se ele é bissexto ou não
let ano = parseInt(prompt("Digite um ano: "));
if ((ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 )) {
    alert("O ano " + ano + " é bissexto. ");
}
else {
    alert("O ano " + ano + " não é bissexto. ");
}
