import { createContext } from 'react'
import CounterStore from '../stores/counter-store'
import TodoListStore from '../stores/todolist-store'


export const storesContext = createContext({
  counterStore: new CounterStore(),
  todoListStore: new TodoListStore()
})