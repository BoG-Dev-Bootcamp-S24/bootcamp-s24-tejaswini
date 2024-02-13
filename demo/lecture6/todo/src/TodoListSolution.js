import React, { useState } from 'react';
import './components/TodoList.css';

function TodoListSolution() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = (e) => {
    if (task) {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (task) => {
    setTodos(todos.map(todo => todo.task === task ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (task) => {
    setTodos(todos.filter(todo => todo.task !== task));
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
      
      {todos.map(todo => (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
          <button onClick={() => removeTodo(todo.task)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoListSolution;