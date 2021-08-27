import React from 'react';

const Todo = ({key, todoName, deleted, edited}) => {
    return ( 
        <div>
            <input
                type="text"
                key={key}
                placeholder={todoName}
                onChange={edited}
            />
            <button
                onClick={deleted}
            >X</button>
        </div>
     );
}
 
export default Todo;