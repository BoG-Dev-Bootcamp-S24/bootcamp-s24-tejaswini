import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (taskToToggle) => {
    setTodos(todos.map(todo =>
      todo.task === taskToToggle ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (taskToRemove) => {
    setTodos(todos.filter(todo => todo.task !== taskToRemove));
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit" onClick={addTodo}>Add</button>
      {Array.isArray(todos) && todos.map(todo => (
        <div className={`todo-item ${todo.completed ? 'complete' : ''}`} key={todo.task}>
          <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
          <button onClick={() => removeTodo(todo.task)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
