import React, { useEffect, useState } from 'react';
import { postTodo, getTodos } from '../APIService';
import AddTodos from './AddTodos';
import TodosList from './TodosList';

const MainView = () => {
    const [todosList, updateTodosList] = useState([])
    const [inputValue, updateInputValue] = useState('')

    const onInputChange = event => {
        updateInputValue(event.target.value)
    }

    const body = {
        title: inputValue,
        completed: false
    }

    const getAndDisplayTodos = async () => {
        const todos = await getTodos()
        updateTodosList(todos.data)
    }
        
    
    const addTodos = async (body) => {
        const todos = await postTodo(body)
        updateTodosList(todos.data)
        console.log('dodaje todoss', todos.data)
    }

    const onSubmit = event => {
        event.preventDefault()
        addTodos(body)
    }

    useEffect(() => getAndDisplayTodos(), [])

    return (
        <>
          <AddTodos onSubmit={onSubmit} onChange={onInputChange}/>
          <TodosList todosList={todosList} />
        </>
    )
}

export default MainView