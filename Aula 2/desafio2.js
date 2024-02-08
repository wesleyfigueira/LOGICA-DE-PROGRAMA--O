/*Desafio 01
Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
soma, subtração, multiplicação e divisão desses números. Armazene os
resultados em um array, sendo o*/


let numeros =[ ]

let numeroUm =10
let numeroDois = 10

let multiplica = numeroDois * numeroUm
let soma = numeroDois + numeroUm
let subtracao = numeroDois - numeroUm
let divisao = numeroDois / numeroUm


numeros.push(multiplica,soma,subtracao,divisao);

console.log(numeros)

/*------------------------------------------------------------*/

/*Desafio 02
Crie um vetor (array) chamado notas com as notas de um aluno em três
disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
da média aritmética.*/

let notas1 = [
    ["matematica", 6],
    ["portugues", 8],
    ["ingles",7]
];

let media = (notas1[0][1]+ notas1[1][1]+notas1[2][1]) /3

console.log(media );

/*------------------------------------------------------------*/

/*Desafio 03
Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
determinante dessa matriz usando a fórmula matemática de determinante.*/

let matriz = [
    [2, 3],
    [4, 5]
];

let determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

console.log("Determinante:", determinante);

/*------------------------------------------------------------*/


/*Desafio 09
Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
mais baixa e a nota mais alta do conjunto.
const notas = [8, 9, 7, 5, 10, 6];*/

const notas = [8, 9, 7, 5, 10, 6];

notas.sort((a, b) => a - b);
notas.pop()
notas.shift()
console.log((notas[0]+notas[1]+notas[2]+notas[3]/notas.length))


/*Desafio 04
Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
interno) desses dois vetores usando a fórmula matemática do produto escalar.*/

let vetor1 =[ 1,2,3]
let vetor2 = [ 4,5,6]

resultado = vetor1[0] + vetor2[0]

console.log(resultado)

/*Desafio 05
Dado um array numeros, crie um novo array que contenha apenas os números pares
do array original.
const numeros = [3, 8, 15, 21, 30, 37, 42];*/

const numeros23 = [3, 8, 15, 21, 30, 37, 42];

const resultado = numeros23.filter()