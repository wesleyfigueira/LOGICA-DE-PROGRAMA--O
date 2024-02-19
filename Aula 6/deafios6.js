
/*Utilizando um loop for, calcule a soma dos números de 1 a 10 e
imprima o resultado.
(1+2=3+3=6+4=10+5=15)*/

/*let soma =0;
for (let i = 1; i <=10; i++) {
    soma +=i;
console.log("resultado da soma "+ soma)
}*/


/*Crie um objeto representando uma pessoa com nome, idade e cidade.
Utilize um loop for-in para imprimir no console todas as
propriedades e os valores do objeto*/

/*let Pessoa ={
  nome: "wesley",
  idade: 30,
  cidade : "Recife"

};
for (let propriedade in Pessoa) {
   console.log(`${propriedade}: ${Pessoa[propriedade]}`);
}*/

/*Crie um array com pelo menos 5 nomes de frutas.
Utilize um loop for-of para imprimir no console cada nome de fruta.*/


/*let frutas =["abacate","manga","acerola","caju","pitanga"]

for (const fruta of frutas) {
    console.log(fruta)
}*/

/*Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop
for.
Saída: N X 1 = 10 */

/*let numero = 5;

for (let i = 1; i <= 10; i++) {
    vezes = i * numero
    console.log(i + " X " + numero +" = "+ vezes)
    
}*/

/*Crie um objeto com valores numéricos e utilize um loop for-in para
calcular e imprimir a soma desses valores.
{ valor1: 10, valor2: 20, valor3: 30, valor4: 40 }*/


/*let valores = { 
    valor1: 10, 
    valor2: 20, 
    valor3: 30, 
    valor4: 40 
};

let soma = 0;

for (const valor in valores) {
    soma += valores[valor]
    
    }
    console.log(soma)*/


/*Faça um mecanismo de busca dentro de um array usando for.
[1,2,3,4,5,6,7,8,9,10]
Achei o número 7*/

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroBuscado = 7;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        encontrado = true;
        console.log(`Achei o número ${numeroBuscado} na posição ${i}.`);
        break; 
    }
}

if (!encontrado) {
    console.log(`O número ${numeroBuscado} não foi encontrado no array.`);
}*/



