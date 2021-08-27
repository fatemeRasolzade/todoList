import React,{ useState } from 'react';
import todoContext from '../context/todoContext';

const GlobalState = ({children}) => {

    const [getTodo,setTodo]= useState("");
    const [getTodos,setTodos]=useState([]);

    const addTodo = () => {
        const todos = [...getTodos];
        const todo = {
            id:Math.floor(Math.random()*1000),
            todoName:getTodo
        };
        todos.push(todo);
        setTodo("");
        setTodos(todos);
    }

    const deleteTodo = id => {
        const todos = [...getTodos];
        const filtered = todos.filter(t => t.id !== id);
        setTodos(filtered);
    }

    const editTodo = (event,id) => {
        const allTodos=getTodos;
        const todoIndex=allTodos.findIndex(t => t.id === id);
        const todo=allTodos[todoIndex];
        todo.todoName=event.target.value;
        const todos=[...allTodos];
        todos[todoIndex]=todo;
        setTodos(todos);
    }

    const setInput = event => {
        setTodo(event.target.value);
    }

    return ( 
        // <div>
        //     {children}
        //     <h2>fatemeh</h2>
        // </div>
        <todoContext.Provider
            value={{
                todo:getTodo,
                todos:getTodos,
                addTodo:addTodo,
                deleteTodo:deleteTodo,
                editTodo:editTodo,
                setInput:setInput
            }}
        >
            {children}
        </todoContext.Provider>
     );
}
 
export default GlobalState;