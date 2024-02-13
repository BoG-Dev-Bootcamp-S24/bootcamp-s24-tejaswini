//solution

document.getElementById('add-button').addEventListener('click', function() {
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input')
    let newTodo = todoInput.value;
// === !==
// == !=
    if (newTodo.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = newTodo;
        todoList.appendChild(listItem)
        todoInput.value = ""
    } else {
        alert("Please enter a task")
    }
})