import React, { useContext } from 'react';
import todoContext from '../../context/todoContext';
import Todo from './Todo';

const Todos = () => {

    const context=useContext(todoContext);
    const {todos, deleteTodo, editTodo} = context;

    return(
        <div>
            {todos.map(t => (
                <Todo
                    key={t.id}
                    todoName={t.todoName}
                    deleted={() => deleteTodo(t.id)}
                    edited={event => editTodo(event,t.id)}
                />
            ))}
        </div>
    );
}
 
export default Todos;