import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {

    const style = {
        background: 'rgb(240,240,240)',
        color: 'black'
    }
    return (
        <div>
            <li
                style={style}>
                {todo.name}
                <button className="btn-delete" onClick={() => { deleteTodo(todo.id) }}>
                    Xoá
                </button>
            </li>
        </div>
    )
}

export default TodoItem
