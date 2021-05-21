export const setTodos = todoItems => {
  return {
    type: 'SET_TODOS',
    payload: todoItems,
  };
};

export const makeActive = id => ({
  type: 'MAKE_ACTIVE',
  payload: id,
});

export const setTodoStart = id => ({
  type: 'SET_TODO_START',
  payload: id,
});

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO_ITEM',
    payload: id,
  };
};

export const startLoad = () => ({
  type: 'FETCH_TODOS_START',
});

export const endLoad = () => ({
  type: 'FETCH_TODOS_END',
});

export const addTodo = newItemValue => {
  return {
    type: 'ADD_TODO',
    payload: newItemValue,
  };
};