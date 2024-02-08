// If/Else If


const salario =2999
const tempo =5

if (salario >= 3000 && tempo >= 4) {
    console.log("pode Realizar o emprestimo");
} else if (tempo > 4) {
    console.log("Pode contratar 80% do emprestimo")
} else {
    console.log("Não pode realizar o emprestimo")
};

///Condicional Ternário 

const idade =16
const possoDirigir = idade >=18 ? "pode dirigir ": "Não Pode Dirigir";
console.log(possoDirigir)


//SWITCH
const dia =3


let diaDaSemana
switch (dia) {
    case 1:
        diaDaSemana = "Domingo"
        break;

        case 2:
        diaDaSemana = "segunda"
        break;

        case 3:
        diaDaSemana = "Terça"
        break;

    default:
        diaDaSemana =" Dia da semana Invalido"
        break;
}
console.log(diaDaSemana)
