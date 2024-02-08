/*Desafio 02
Crie uma agenda de contatos que armazene vários contatos em um array,
modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar
Map)*/

/*const Agenda = {
    contato1 :{
        nome: "Wesley", 
        Telefone:81987747202,
        email:"wesleyfigueira1993@gmail.com"
    },

    contato2 :{
        nome: "Wandelson",
        Telefone:81991951367 ,
        email:"wandelsonuber@gmail.com"
    },
    contato3 :{
        nome: "Nino",
        Telefone:81985640841,
        email:"ninob0oy@hotmail.com"
    }
};
*/


/*Desafio 03
Criar um dicionário de sinônimos usando Array e Objs
Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente",
"satisfeito"]
dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"],*/


/*const sinonimos ={
    feliz:["alegre", "contente","satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom:["ótimo", "excelente", "maravilhoso"]

}
console.log(sinonimos.feliz)*/

/*Desafio 04
Criar um dicionário de sinônimos usando Map
Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre",
"contente", "satisfeito"]
dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido",
"deprimido"],
dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"],*/

/*const dicionarioDeSinonimos =new Map([
    ["feliz", ["alegre", "contente", "satisfeito"]],
    ["triste", ["melancólico", "abatido", "deprimido"]],
    ["bom", ["ótimo", "excelente", "maravilhoso"]]
]);

console.log(dicionarioDeSinonimos.get("feliz"))

dicionarioDeSinonimos.set(["maisoumenos",["tantofaz","jaera","so teste"]])
console.log(dicionarioDeSinonimos)*/

/*Desafio 05
Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade.
Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)*/


const Pessoa ={
    pessoa1:{
        nome:"Wesley",
        idade:"30",
        cidade:"Recife"
    },
    pessoa2:{
        nome:"Elder Figueira",
        idade:"22",
        cidade:"São Paulo"
    },
}
console.log()



