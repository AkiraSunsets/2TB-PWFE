// Exercício 6 - A jornada de trabalho atual de um funcionário é de 40 horas. O funcionário que trabalha
//mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um //acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
//o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido 
//das horas extras, caso tenham sido trabalhadas.

let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas por mês: "));
let salarioPorHora = parseFloat(prompt("Digite o valor do sálario por hora: "));
let salarioTotal;

if (horasTrabalhadas > 40) {
    let horasExtras = horasTrabalhadas - 40;
    let valorHoraExtra = salarioPorHora * 1.5;
    salarioTotal = (40 * salarioPorHora) + (horasExtras * valorHoraExtra);
}
else {
    salarioTotal = horasTrabalhadas * salarioPorHora;
}
alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));
