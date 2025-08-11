//Exercício 1 - Peça um número ao usuário e imprima se ele é par ou impar. E se é múltiplo de 3 ou 5.

let numero = parseInt(prompt("Digite um número: "));
if (numero % 2 === 0){
    alert("O número informado é par. ");
}
else {
    alert("O número informado é impar. ");
}

if (numero % 3 === 0) {
    alert("O número informado é múltiplo de 3.");
}
else {
    alert("O número informado não é múltiplo de 3. ");
}
if (numero % 5 === 0) {
    alert("O numero informado é multiplo de 5.");
}
else {
    alert("O número informado não é multiplo de 5. ");
}
