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


//CRUD
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask() {
        //CREATE  //READ
    if (inputBox.value.trim() === "") {
        alert("Campo vazio! Por favor, escreva algo.");
    } else {
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);

        //DELETE

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}
 //UPDATE
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTarefa(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTarefa()

