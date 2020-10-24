import React, { useState,useEffect } from 'react';
import { fetchTodoItems, createTodoItem } from "./http-clients/TodoItemRepository";

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
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const newTodos = [...todos, { description: newTodo, isComplete: false }];
      await createTodoItem(newTodo);
      setTodos(newTodos);
      setNewTodo('');
    }
  }
  return (
    <div className="App">
      <h1>TODO Tasks:</h1>
      <input type="text"
        placeholder="What's need to be done?"
        onKeyDown={handleKeyDown}
        value={newTodo}
        onChange={onNewTextChange} />
    <ul>
      {todos.map(item=>{
        return <li key={item.description}>{item.description}</li>
      })}
    </ul>
    
    </div>

  );
}

export default App;
