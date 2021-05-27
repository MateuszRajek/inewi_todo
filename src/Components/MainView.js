import React, { useEffect, useState } from 'react';
import { postTodo, getTodos, editTodos as edit, deleteTodos as remove } from '../APIService';
import AddTodos from './AddTodos';
import TodosList from './TodosList';
import { todosListState, userIdState } from './atoms'
import { useRecoilState, useRecoilValue } from 'recoil';
import Nav from './Nav';
import { Container } from '@theme-ui/components';

const MainView = () => {
    const [todosList, updateTodosList] = useRecoilState(todosListState)
    const [inputValue, updateInputValue] = useState('')
    const [searchInputValue, setSearchInputValue] = useState('')
    const [completed, setCompleted] = useState(false)
    const todosCompletedList = todosList.filter((item) => item.completed)
    const userId = useRecoilValue(userIdState)
    // const [userId, setUserId] = useState()

    const onInputChange = event => {
        updateInputValue(event.target.value)
    }

    // console.log(userId)
    const addTodos = async () => {
        const body = {
            title: inputValue,
            completed: false
        }
        if (inputValue === '') {
            alert('This field can not be empty')
        } else {
            const todos = await postTodo(body, userId)
            updateTodosList(todos.data)
            updateInputValue('')
        }
    }

    const editTodos = async (body, id) => {
        const todos = await edit(body, id, userId)
        updateTodosList(todos.data)
    }

    const deleteTodos = async id => {
        const todos = await remove(id, userId)
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
            const todos = await getTodos(userId)
            // console.log(todos)
            updateTodosList(todos.data)
            // let completed = []
            // for (let item of todos.data) {
            //     if(item.completed === true) {
            //         completed.push(item)
            //     }
            // }
        }
        getAndDisplayTodos()
    }, [updateTodosList])

    return (
        <>
        <Container sx={{width: '90%', padding: '0 10px'}}>
            <Nav sx={{margin: '10px 0'}}showCompleted={showCompleted} showALl={showALl} setSearchInputValue={setSearchInputValue} />
            <AddTodos onSubmit={onSubmit} onChange={onInputChange} value={inputValue} />
            <TodosList todosList={todosList} editTodos={editTodos} deleteTodos={deleteTodos} 
            completed={completed} todosCompletedList={todosCompletedList} searchText={searchInputValue} />
        </Container>
        </>
    )
}

export default MainView