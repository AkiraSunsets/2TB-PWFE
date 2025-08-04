//crie um programa que pergunte a largura e altura de uma parede. Sabendo que 1 litro de tinta
//pinta 2 metros quadrados, calcule quantos litros de tinta serão necessários para pintar a parede.


let largura = parseFloat(prompt("Digite a largura da parede em metros: "));
let altura = parseFloat(prompt("Digite a altura da parede em metros: "));
let area = largura * altura;
let litrosTinta = area / 2;
alert("Será necessário " + litrosTinta + "litros de tinta para pintar a parede.");
