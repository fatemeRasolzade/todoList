import React, { useContext } from 'react';
import todoContext from '../../context/todoContext';

const Form = () => {

    const context=useContext(todoContext);
    const {todo, setInput, addTodo}=context;

    return ( 
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Add Task..."
                    onChange={setInput}
                    value={todo}
                />
                <button
                    type="submit"
                    onClick={addTodo}
                >+</button>
            </form>
        </div>
     );
}
 
export default Form;