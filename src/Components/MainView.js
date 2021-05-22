import React, { useEffect, useState } from 'react';
import { postTodo, getTodos, editTodos as edit, deleteTodos as remove } from '../APIService';
import AddTodos from './AddTodos';
import TodosList from './TodosList';
import { todoListState } from './atoms'
import { useRecoilState } from 'recoil';

const MainView = () => {
    const [todosList, updateTodosList] = useRecoilState(todoListState)
    const [inputValue, updateInputValue] = useState('')

    const onInputChange = event => {
        updateInputValue(event.target.value)
    }

    const addTodos = async () => {
        const body = {
            title: inputValue,
            completed: false
        }
        const todos = await postTodo(body)
        updateTodosList(todos.data)
        updateInputValue('')
    }

    const editTodos = async (body, id) => {
        const todos = await edit(body, id)
        updateTodosList(todos.data)
    }

    const deleteTodos = async id => {
        const todos = await remove(id)
        updateTodosList(todos.data)
    }

    const onSubmit = event => {
        event.preventDefault()
        addTodos()
    }

    useEffect(() => {
        const getAndDisplayTodos = async () => {
            const todos = await getTodos()
            updateTodosList(todos.data)
        }
        getAndDisplayTodos()
    }, [updateTodosList])

    return (
        <>
          <AddTodos onSubmit={onSubmit} onChange={onInputChange} value={inputValue}/>
          <TodosList todosList={todosList} editTodos={editTodos} deleteTodos={deleteTodos} />
        </>
    )
}

export default MainView