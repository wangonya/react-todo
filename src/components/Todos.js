import React from 'react'
import data from '../data'

function Todos() {
    const todos = data.map( todo =>
        <div key={todo.id} className={'todo-item'}>
            <input type="checkbox" checked={todo.completed}/>
            <p>{todo.text}</p>
        </div>
    );

    return (
        <div className={'todo-list'}>
            {todos}
        </div>
    )
}

export default Todos;