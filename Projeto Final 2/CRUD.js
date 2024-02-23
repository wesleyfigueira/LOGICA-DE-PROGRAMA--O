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
    tarefas: 
        {
            task: "Cortar o Cabelo"
        }
    
}

//CREAT
function criarTask({task}) {
    ToDoList.tarefas.push({
        task
    })

}
criarTask({task:"lavar pratos"})

console.log(ToDoList.tarefas)

//READ
//UPDATE
//DELETE
