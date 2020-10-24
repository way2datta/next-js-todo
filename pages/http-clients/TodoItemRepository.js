import axios from "axios";

export async function fetchTodoItems() {
  const todoItemsResponse = await axios.get('/api/todo-items');
  return todoItemsResponse.data;
}

export async function createTodoItem(description) {
  const todoItemsResponse = await axios.post('/api/todo-items', { description, isComplete: false });
  return todoItemsResponse.data;
}

export async function updateTodoItem({description, isComplete}) {
  const todoItemsResponse = await axios.put('/api/todo-items', { description, isComplete });
  return todoItemsResponse.data;
}
