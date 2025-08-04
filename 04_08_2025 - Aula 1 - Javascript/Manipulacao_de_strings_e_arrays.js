//Manipulação de strings e arrays

let a = "a";
let b = "b";

let c = 25;

console.log(a>b); //false
console.log(a<b); //true

console.log(typeof (a)); //tipos
console.log(typeof (c.toString));
console.log(arr.toString()); //converte para string
console.log(arr); //converte para string
console.log(arr.length); //tamanho do array
console.log(arr.slice(1, 2)); //fatia o array
console.log(nome.toUpperCase()); //converte para maiúsculas
console.log(nome.toLowerCase()); //converte para minúsculas
console.log(nome.replace("K", "G")); //substitui K por G
let lista = "Maria, Jorge, Ana";
lista = lista.split(",");
console.log(lista) //transforma em uma lista, dividindo por vírgula

lista = lista.join(",");
console.log(lista); //transforma em uma string, unindo por vírgula

console.log(arr)
arr.push("Maria");  //adiciona Maria ao final do array

console.log(arr);
arr.unshift("João"); //adiciona João ao início do array

console.log(arr);
arr.pop() //remove o último elemento do array

console.log(arr);
arr.shift(); //remove o primeiro elemento do array

console.log(arr);

//========================================
// IF E ELSE


// AND == &&
// OR == ||
// NOT == !

if (3 > 4){
    console.log("Oi");
}else if (5 > 6){  
    console.log("Oi");
}else{
    console.log("Tchau");
}


// ========= Switch case ==================

let amarela = prompt("Escolha uma cor: ");

switch (amarela){
    case "amarelo":
        console.log("Você gosta de: ", amarela);
        break; //quebra em caso de resposta certa
    case "verde":
        console.log("Você gosta de: ", amarela);
        break;
    case "roxo":
        console.log("Você gosta de ", amarela);
        break;
    case "rosa": //case é o if
        console.log("Você gosta de ", amarela);
    break;
    default: //default é o else
        console.log("Você não gosta de cor alguma");
}

//==============================================

//Operador terciário

let idade = prompt("Digite sua idade: ");
let maiorDidade = idade > 18 ? "Sim" : "Não";
console.log(maiorDidade);

