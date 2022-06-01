import { createStore } from 'redux';
import {
  CounterReducer,
  decrementCounter,
  incrementCounter,
} from './CounterState';
import { TodoReducer } from './TodosState';

export const store = createStore(TodoReducer);
