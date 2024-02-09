/*Desafio 1
- Verificação de Números Pares e Ímpares (If e Ternário)
● Escreva um programa que recebe um número como entrada e verifica
se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
ímpar.*/


let numero = 5;

if (numero % 2 == 0) {
    console.log("é Par ")
} else {
  console.log("é Impar")
}

let resultado = numero % 2 === 0 ? "É par" : "É ímpar";
console.log(resultado)

/*Desafio 2
- Verificação de Nota
● Crie um programa que recebe uma nota como entrada e atribui uma
mensagem com base na nota. Use as seguintes regras:
- Se a nota for maior ou igual a 90, imprima "Aprovado com
mérito".
- Se a nota for maior ou igual a 70 e menor que 90, imprima
"Aprovado".
- Se a nota for menor que 70, imprima "Reprovado"*/

let nota = 69;

if (nota >= 90) {
    console.log("Aprovado com mérito")
}else if (nota >=70 ){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
};


/*Determinação do Maior Número
● Escreva um programa que receba três números como entrada e
determina o maior deles. Imprima o número mais alto.*/


 let numeroMaior1 = 500
 let numeroMaior2 = 10
 let numeroMaior3 = 80

 let maiorNumero = numeroMaior1

 if (numeroMaior2 > maiorNumero) {
    maiorNumero = numeroMaior2
 }
 if (numeroMaior3 > maiorNumero) {
    maiorNumero =numeroMaior3
 }

 console.log("maior Numero é :", maiorNumero)

 /*Desafio 4
 - Verificação de Triângulo
 ● Crie um programa que recebe três comprimentos de lados de um
 triângulo como entrada e determina se eles formam um triângulo
 equilátero (Todos os lados são iguais), isósceles (Dois lados
 são iguais) ou escaleno (Se nada é igual). Imprima a
 classificação do triângulo.*/


 let lado1 = 12
 let lado2 = 10
 let lado3 = 10

 if (lado1 == lado2 && lado1 == lado3) {
    console.log("Triangulo Equilatero ")
 }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O tringaulo é isosceles")
 }else {
    console.log("O triângulo é escaleno.")
};

/*Desafio 5
- Verificação de Ano Bissexto
● Desenvolva um programa que receba um ano como entrada e verifica
se ele é bissexto ou não. Um ano bissexto é aquele que é
divisível por 4, exceto por anos que são divisíveis por 100, a
menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou
"Não é um ano bissexto" com base na entrada. (2000, 1996) */

const ano = 2901;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Não é um ano bissexto");
};

let idadeDirigir =19

if (idadeDirigir >= 18) {
    console.log("Pode dirigir")
}else{
    console.log("Não Pode Dirigir")
}

let ResultadoIdade = idadeDirigir >= 18 ? "Pode Dirgir": "Não Pode DIrgir";
console.log(ResultadoIdade)