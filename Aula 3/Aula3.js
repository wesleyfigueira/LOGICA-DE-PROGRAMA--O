
// Maneira mais facil de trabalhar com objetos, parq evitar erros

const pessoa ={
    nome: "Wesley ",
    idade: 30,
    profissao: "Farmaceutico"
};

console.log(pessoa.nome)


const Biblioteca ={
    livro:{
        titulo: "A arte da guerra",
        autor: "sun tsu",
        anoPublicacao:"1000"
    },

    livro2 : {
        titulo:"Book of mormon",
        autor:"Translated by Joseph Smith",
        anoPublicacao:"1830"

    },

    livro2 : {
        titulo:"The Bible ",
        autor:" Old Profets ",
        anoPublicacao:" started in year 0"

    },
};

console.log(Biblioteca.livro.autor)
console.log(Biblioteca)


const  livro4 = {
  titulo:"The Bibleeess ",
  autor:" Old Profets ",
  anoPublicacao:" started in year 0"
};

//adicionar objeto a  O objeto maior
biblioteca.livro4  =livro4

console.log(Biblioteca)

//correção do item no objeto
biblioteca.livro4.titulo ="The Bible"
console.log(Biblioteca)

// Deletar  itens do objeto ou o objeto

delete biblioteca.livro2.autor
console.log(Biblioteca)

//verificar 
console.log("livro" in Biblioteca)


/*------------------------------------------------------------------*/

const meuMap = new Map()

meuMap.set ("Nome","Wesley")
meuMap.set ("Nome2","Wandelson")

console.log(meuMap)