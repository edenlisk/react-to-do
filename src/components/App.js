import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import {FaPlusCircle} from "react-icons/fa";

const App = () => {
    const [todos, setTodos] = useState(
        []
    )
    const todoInput = useRef();

    const handleNewTodo = () => {
        const name = todoInput.current.value;
        if (!name) return;
        setTodos(prevState => {
            return [...prevState, {id: todos.length + 1, description: name, completed: false}]
        })
        todoInput.current.value = null;
    }


    return (
        <div>
            <div>
                <p className='text-muted fw-bold'>Add Todo</p>
            </div>
            <div className="d-flex align-items-center">
                <input ref={todoInput} type="text"/>
                <FaPlusCircle onClick={handleNewTodo}/>
            </div>
            <TodoList todos={todos} />
        </div>
    )
}

export default App;