import React, { useState, useEffect } from 'react';
import { fetchTodoItems, createTodoItem, updateTodoItem } from '../http-clients/TodoItemRepository';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  async function loadBuckets() {
    const todoItems = await fetchTodoItems();
    setTodos(todoItems);
  }

  useEffect(() => {
    loadBuckets();
  }, []);

  const onNewTextChange = ({ target }) => {
    setNewTodo(target.value);
  };

  const onToggleTodoItem = async (description) => {
    const objIndex = todos.findIndex((x) => x.description === description);
    const updatableTodo = todos[objIndex];
    updatableTodo.isComplete = !updatableTodo.isComplete;
    await updateTodoItem(updatableTodo);
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const newTodos = [...todos, { description: newTodo, isComplete: false }];
      await createTodoItem(newTodo);
      setTodos(newTodos);
      setNewTodo('');
    }
  };
  return (
    <div className="App">
      <h1>TODO Application</h1>
      <input
        type="text"
        placeholder="What's need to be done?"
        onKeyDown={handleKeyDown}
        value={newTodo}
        onChange={onNewTextChange}
        className="newTodoText"
      />
      <h3 className="sub-heading">Existing items:</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.description} onClick={() => onToggleTodoItem(item.description)}>
            {item.description}
            {' '}
            <span className="tag">{item.isComplete ? 'Done' : 'Not done'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
