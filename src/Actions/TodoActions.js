let nextTodoId = 0;

export const addTodo = (title) => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    title,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});
