import { combineReducers, createStore } from 'redux';
import {
  CounterReducer,
  decrementCounter,
  incrementCounter,
} from './CounterState';
import { TodoReducer } from './TodosState';

const rootReducer = combineReducers({
  counter: CounterReducer,
  todo: TodoReducer,
});

export const store = createStore(rootReducer);
