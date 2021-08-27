import React from 'react';
import Form from '../components/todos/Form';
import Todos from './../components/todos/Todos';

const App = () => {
    return ( 
        <div style={{textAlign:"center"}}>
            <h1>React js</h1>
            <hr/>
            <Form/>
            <hr/>
            <Todos/>
        </div>
     );
}
 
export default App;