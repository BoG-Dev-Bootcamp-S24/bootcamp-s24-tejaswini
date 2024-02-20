/* with remove button*/
document.getElementById('add-button').addEventListener('click', function() {
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input')
    let newTodo = todoInput.value;
    if (newTodo.trim() !== '') {
        
        let removeButton = document.createElement('button');
        let listItem = document.createElement('li');
        let todoText = document.createElement('span');
        
        removeButton.className = "remove-button";
        removeButton.textContent = "x";
        removeButton.onclick = () => {
            todoList.removeChild(listItem);
        }
        
        todoText.textContent = newTodo; 
        listItem.appendChild(removeButton);
        listItem.appendChild(todoText);
        todoList.appendChild(listItem);
        todoInput.value = "";
    } else {
        alert("Please enter a task");
    }
});

/* added method with checkbox */
/*document.getElementById('add-button').addEventListener('click', function() {
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input');
    let newTodo = todoInput.value;
    if (newTodo.trim() !== '') {
        
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox"; // Set type to checkbox
        let listItem = document.createElement('li');
        let todoText = document.createElement('span');
        
        checkBox.className = "checkbox";
        checkBox.onclick = () => {
            if (checkBox.checked) {
                listItem.style.textDecoration = "line-through"; 
            } else {
                listItem.style.textDecoration = "none"; 
            }
        }
        
        todoText.textContent = newTodo; 
        listItem.appendChild(checkBox);
        listItem.appendChild(todoText);
        todoList.appendChild(listItem);
        todoInput.value = "";
    } else {
        alert("Please enter a task");
    }
});*/
