/*Desafio 1
- Contagem Regressiva
● Escreva um programa que use um loop while para contar de 10 até
1 e imprima cada número na tela, em ordem decrescente.*/


let contador = 10

while (contador >0) {
    console.log(contador)
    contador--;
}


/*Desafio 2
- Números Primos
● Crie um programa que peça ao usuário para inserir um número e
use um loop while para verificar se o número é primo ou não. Um
número primo é aquele que só é divisível por 1 e por ele mesmo.
Imprima se o número é primo ou não.*/







/*Desafio 3
- Soma de Números Pares
● Desenvolva um programa que peça ao usuário para inserir números 
inteiros. Use um loop while para calcular a soma dos números 
pares inseridos pelo usuário. Pare a entrada quando o usuário 
inserir 0 e exiba a soma total.*/

let soma = 0;

while (true) {
    let numero = parseInt(prompt("Insira um número inteiro (Digite 0 para parar): "));
    
    
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        continue; 
    }
 
    if (numero === 0) {
        break;
    }
    
    if (numero % 2 === 0) {
    
        soma += numero;
    }
}

alert("A soma dos números pares é: " + soma);




/*Desafio 4
- Adivinhe o Número
● Crie um programa que gere um número aleatório entre 1 e 100. Em 
seguida, peça ao usuário para adivinhar o número. Use um loop 
while para continuar pedindo ao usuário que adivinhe até que ele 
acerte o número. Forneça dicas informando se o número é maior ou 
menor.
*/

const sorteado1 = Math.floor(Math.random()*(10-1+1));

while (true) {

    let usuario =(prompt("Adivinhe o numero: "));
    
    if (usuario == 0) {
        alert("Digite um numero de 1 até 100")
    }
    if (sorteado1 == usuario) {
        alert("Você acertou " + sorteado1 )
        break;
    }
}





/*Desafio 5
- Jogo de Adivinhação com Limite
● Modifique o jogo de adivinhação do Desafio 4 para limitar o 
número de tentativas. Se o usuário não adivinhar o número dentro 
de um determinado número de tentativas (por exemplo, 5 
tentativas), o programa deve encerrar e informar o número 
correto*/


const sorteado2 = Math.floor(Math.random()*(10-1+1));

while (true) {

    let usuario =(prompt("Adivinhe o numero: "));
    
    if (usuario == 0) {
        alert("Digite um numero de 1 até 100")
    }
    if (sorteado2 == usuario) {
        alert("Você acertou " + sorteado1 )
        break;
    }
}
