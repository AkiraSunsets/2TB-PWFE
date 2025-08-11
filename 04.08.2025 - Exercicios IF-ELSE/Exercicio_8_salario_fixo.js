//Exercício 8 - Ler o sálario fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o valor total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu sálario total

let salarioFixo = parseFloat(prompt("Digite o sálario fixo do vendedor: " ));
let vendas = parseFloat(prompt("Digite o valor total das vendas efetuadas pelo vendedor: "));
let comissao;

if (vendas <= 1500) {
    comissao = vendas * 0.03;
}
else {
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05);
}
let salarioTotal = salarioFixo + comissao;
alert("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2));
alert("Salário Fixo: R$ " + salarioFixo.toFixed(2));
alert("Vendas Totais: R$ " + vendas.toFixed(2));      
alert("Comissão: R$ " + comissao.toFixed(2));
alert("Salário Total: R$ " + salarioTotal.toFixed(2));
    
