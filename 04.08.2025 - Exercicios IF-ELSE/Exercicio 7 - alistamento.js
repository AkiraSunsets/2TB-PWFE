//Exercicio 7 - escreva um programa que leia o ano de nascimento de um rapaz e mostre sua situação em //relação ao alistamento militar
//se tiver menos de 18 anos, mostre quantos anos faltam para o alistamento
//- se já tiver depois dos 18 anos, mostre quantos anos se passaram do alistamento 

let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade < 18){
    let anosParaAlistamento = 18 - idade;
    console.log("Você ainda não está apto para o alistamento militar. Faltam " + anosParaAlistamento + " anos.");
} else if (idade === 18) 
{
    alert("Você está apto para o alistamento militar este ano.");
}else {
    let anosAposAlistamento = idade - 18;
    alert("Você já deveria ter se alistado há " + anosAposAlistamento + " anos.");
}   
