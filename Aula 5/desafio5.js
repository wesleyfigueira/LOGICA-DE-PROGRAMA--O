/*Desafio 1
- Contagem Regressiva
● Escreva um programa que use um loop while para contar de 10 até
1 e imprima cada número na tela, em ordem decrescente.*/


/*let contador = 10

while (contador >0) {
    console.log(contador)
    contador--;
}*/


/*Desafio 2
- Números Primos
● Crie um programa que peça ao usuário para inserir um número e
use um loop while para verificar se o número é primo ou não. Um
número primo é aquele que só é divisível por 1 e por ele mesmo.
Imprima se o número é primo ou não.*/


//const sorteado1 = Math.floor(Math.random()*100)+1;
const sorteado1 =8
let numeroPrimo = sorteado1 % sorteado1 == 0

console.log(numeroPrimo)
