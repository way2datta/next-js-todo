import axios from "axios";

export async function fetchTodoItems() {
  const todoItemsResponse = await axios.get('/api/todo-items');
  return todoItemsResponse.data;
}

export async function createTodoItem(description) {
  const todoItemsResponse = await axios.post('/api/todo-items', { description, isComplete: false });
  return todoItemsResponse.data;
}
