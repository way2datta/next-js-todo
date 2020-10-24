import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, appendTodos] = useState([]);

  const onNewTextChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newTodos = [...todos, newTodo]
      appendTodos(newTodos);
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
      {todos.map(value=>{
        return <li key={value}>{value}</li>
      })}
    </ul>
    
    </div>

  );
}

export default App;
