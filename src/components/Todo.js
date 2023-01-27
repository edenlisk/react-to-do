import React from 'react';
import { BsTrash } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({ todo }) => {
    return (
        <div className='container d-flex align-items-center justify-content-around'>
            <input type='checkbox' checked={todo.completed}/>
            <p className='my-auto'>{todo.description}</p>
            <BsTrash />
        </div>
    )
}

export default Todo;