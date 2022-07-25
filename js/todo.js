const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list")

let toDos  = [];
const TODOS_KEY = "todos";
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(e => e.id !== parseInt(li.id));
    li.remove();
    saveToDos();    
}

function painToDo(newTodo){
    console.log(newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText= "x";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodo.id;
    // li.classList.add(newTodo.id);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    painToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if(savedToDos !== null){
    toDos = savedToDos;
    savedToDos.forEach(painToDo);
}