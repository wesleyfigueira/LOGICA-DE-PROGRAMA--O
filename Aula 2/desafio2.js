/*Desafio 01
Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
soma, subtração, multiplicação e divisão desses números. Armazene os
resultados em um array, sendo o*/


/*let numeros =[ ]

let numeroUm =10
let numeroDois = 10

let multiplica = numeroDois * numeroUm
let soma = numeroDois + numeroUm
let subtracao = numeroDois - numeroUm
let divisao = numeroDois / numeroUm


numeros.push(multiplica,soma,subtracao,divisao);

console.log(numeros)*/

/*------------------------------------------------------------*/

/*Desafio 02
Crie um vetor (array) chamado notas com as notas de um aluno em três
disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
da média aritmética.*/

/*let notas = [
    ["matematica", 6],
    ["portugues", 8],
    ["ingles",7]
];

let media = (notas[0][1]+ notas[1][1]+notas[2][1]) /3

console.log(media );*/

/*------------------------------------------------------------*/

/*Desafio 03
Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
determinante dessa matriz usando a fórmula matemática de determinante.*/

/*let matriz = [
    [2, 3],
    [4, 5]
];

let determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

console.log("Determinante:", determinante);*/

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


