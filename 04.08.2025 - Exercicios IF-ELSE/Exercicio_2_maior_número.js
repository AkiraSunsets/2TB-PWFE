//Exercício 2 - Peça três números ao usuário e imprima o maior

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let maiorNumero = num1;
if (num2 > maiorNumero) {
    maiorNumero = num2;
}
if (num3 > maiorNumero) {
    maiorNumero = num3;
}
alert("O maior número é: " + maiorNumero);
