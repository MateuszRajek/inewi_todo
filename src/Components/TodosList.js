import React from 'react';
import { Container, Flex } from "@theme-ui/components"
import Todos from "./Todos"


const TodosList = ({todosList, editTodos, deleteTodos}) => {

    return(
        <Container>
            <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
                {todosList.map(todos => {
                    return(
                            <Todos key={todos.id} item={todos} editTodos={editTodos} deleteTodos={deleteTodos} />
                    )
                })}
            </Flex>
        </Container>
        
    )
}

export default TodosList