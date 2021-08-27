import { createContext } from 'react'

const todoContext= createContext({
    todo:"",
    todos:[],
    AddTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {},
    setInput: () => {}
});
export default todoContext;