const defaultState = [];

const ADD = 'ADD@TODO';
const REMOVE = 'REMOVE@TODO';
const RESET = 'RESET@TODO';

export const addTodo = (todo) => {
  return {
    type: ADD,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};

export const resetTodos = () => {
  return {
    type: RESET,
  };
};

export const TodoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((el) => el.id !== action.payload);
    }
    case RESET: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};
