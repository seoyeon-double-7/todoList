const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// string화 시켜주기
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // 클릭한 toDos의 id를 필터링 해서 만든 새 배열을 toDos에 다시 저장!
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // li.id를 int로 바꿔줬기때문에 다시 string으로 저장!
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //li에 id 주기
    const span = document.createElement("span"); 
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.append(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);    // newTodo를 toDos 배열에 넣기
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

// 로컬스토리지에 저장된 toDos가 존재하면
// 로컬 스토리지에 저장된 string화 된 값들을 배열 형태로 변환 후 저장

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}