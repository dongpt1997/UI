import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const TodoForm = ({ addTodo }) => {
    const [name, setName] = useState('')

    const onTitleOnchange = (e) => {
        setName(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            id: uuidv4(),
            name
        })
        setName('')
    }
    return (
        <div >
            <form onSubmit={hadleSubmit}>
                <input type='text' placeholder='enter your todo...' onChange={onTitleOnchange} value={name} required />
                <input type="submit" value="Add todo" />
            </form>
        </div>
    )
}

export default TodoForm
