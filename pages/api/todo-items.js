const items = [{ description: 'This is a first todo item', isComplete: false },
  { description: 'This is an another todo item', isComplete: false }];

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET': {
      res.end(JSON.stringify(items));
      break;
    }
    case 'POST': {
      const newTodoItem = req.body;
      items.push(newTodoItem);
      res.end(JSON.stringify(items));
      break;
    }
    case 'PUT': {
      const updatableTodoItem = req.body;
      const objIndex = items.findIndex((x) => x.description === updatableTodoItem.description);
      const updatableTodo = items[objIndex];
      updatableTodo.isComplete = !updatableTodo.isComplete;
      res.end(JSON.stringify(items));
      break;
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
