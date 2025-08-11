//Exercício 3 - peça um número ao usuário e imprima a classificação de idade bebê = menor de 2 anos, criança = menor de 13 anos, adolescente = menor de 18 anos adulto = menor de 60 anos, idoso = maior ou igual 60 anos

let idadeUsuario = parseInt(prompt("Digite sua idade: "));
if (idadeUsuario < 2) {
    alert("Você é um bebê. ");
}
else if (idadeUsuario < 13) {
    alert("Você é uma criança. ");
}
else if (idadeUsuario < 18) {
    alert("Você é um adolescente. ");
}
else if (idadeUsuario < 60) {
    alert("Você é um adulto. ");
}
else {
    alert("Você é um idoso. ");
}
