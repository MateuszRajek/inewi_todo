import React, { useEffect, useState } from 'react';
import { postTodo, getTodos, editTodos as edit, deleteTodos as remove } from '../APIService';
import AddTodos from './AddTodos';
import TodosList from './TodosList';
import { todosListState } from './atoms'
import { useRecoilState } from 'recoil';
import Nav from './Nav';

const MainView = () => {
    const [todosList, updateTodosList] = useRecoilState(todosListState)
    const [inputValue, updateInputValue] = useState('')
    const [searchInputValue, setSearchInputValue] = useState('')
    const [completed, setCompleted] = useState(false)
    const todosCompletedList = todosList.filter((item) => item.completed);

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

    const showCompleted = () => {
        setCompleted(true)
    }

    const showALl = () => {
        setCompleted(false)
    }

    useEffect(() => {
        const getAndDisplayTodos = async () => {
            const todos = await getTodos()
            updateTodosList(todos.data)
            let completed = []
            for (let item of todos.data) {
                if(item.completed === true) {
                    completed.push(item)
                }
            }
        }
        getAndDisplayTodos()
    }, [updateTodosList])

    return (
        <>
          <Nav showCompleted={showCompleted} showALl={showALl} setSearchInputValue={setSearchInputValue} />
          <AddTodos onSubmit={onSubmit} onChange={onInputChange} value={inputValue} />
          <TodosList todosList={todosList} editTodos={editTodos} deleteTodos={deleteTodos} completed={completed} todosCompletedList={todosCompletedList} searchText={searchInputValue} />
        </>
    )
}

export default MainView