//solution-
document.getElementById('add-button').addEventListener('click', function() {
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input')
    let newTodo = todoInput.value;
// === !==
// == !=
    if (newTodo.trim() !== '') {
        let listItem = document.createElement('li');
        let removeButton = document.createElement('button');
        removeButton.className = "remove-button"
        removeButton.textContent = "Remove"
        removeButton.onclick = () => {
            todoList.removeChild(listItem)
        }
        
        listItem.textContent = newTodo;
        console.log(removeButton)
        listItem.appendChild(removeButton)
        todoList.appendChild(listItem)
        todoInput.value = ""
    } else {
        alert("Please enter a task")
    }
})