/*Proposta de Projeto 1
- O que?
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de 
lista de tarefas (ToDo List).
- Requisitos
Dentre as funcionalidades, espera-se que seja possível:
- Adicionar uma tarefa (Create)
- Listar todas as tarefas salvas (Read)
- Editar uma tarefa salva (Update)
- Remover uma tarefa salva (Delete)
- Obter uma tarefa, através de um parâmetro (id)
- Observações
Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um 
array para armazenar a lista das tarefas cadastradas*/


const ToDoList ={
    tarefas:[
        {
            id: 1,
            task: "Cortar o Cabelo"
        }
    ] 

    
}

//CREAT
function criarTask({task}) {
    ToDoList.tarefas.push({
        id : ToDoList.tarefas.length +1,
        task
    })

}
criarTask({task:"lavar pratos"})
criarTask({task:"Lavar Banheiro"})



//READ
function lerTask() {
    return ToDoList.tarefas;
}

// UPDATE
function upDate(id, novaTarefa) {
    const index = ToDoList.tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
        ToDoList.tarefas[index].task = novaTarefa;
        return ToDoList.tarefas[index];
    } else {
        return "Tarefa não encontrada.";
    }
}

//DELETE

function deleteTask(id) {
    const index = ToDoList.tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
        ToDoList.tarefas.splice(index, 1);
        return "Tarefa excluída com sucesso.";
    } else {
        return "Tarefa não encontrada.";
    }
}

console.log(lerTask())
console.log(upDate(1, "Tomar banho"));
console.log(deleteTask(1))


