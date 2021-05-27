import React from 'react';
import { Container, Flex } from "@theme-ui/components"
import Todos from "./Todos"


const TodosList = ({ todosList, editTodos, deleteTodos, completed, todosCompletedList, searchText }) => {
    const todoList = completed ? todosCompletedList : todosList
    const searchedList = todoList.filter(item => item.title.includes(searchText))

    return(
        <Container>
            <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
                {searchText && searchedList.map(todos => {
                        return(
                            <Todos key={todos.id} item={todos} editTodos={editTodos} deleteTodos={deleteTodos} />)})}
                {todoList.map(todos => {
                    if (completed) {
                        return(
                            !searchText && todos.completed && <Todos key={todos.id} item={todos} editTodos={editTodos} deleteTodos={deleteTodos} />
                        )
                    } else 
                        return(
                            !searchText && !todos.completed && <Todos key={todos.id} item={todos} editTodos={editTodos} deleteTodos={deleteTodos} />
                    )
                })}
            </Flex>
        </Container>
    )
}

export default TodosList