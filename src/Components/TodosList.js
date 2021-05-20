import React from 'react';
import { Container, Flex } from "@theme-ui/components"
import Todos from "./Todos"


const TodosList = ({todosList}) => {


    return(
        <Container>
            <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
                {todosList.map(todos => {
                    return(
                        <Todos key={todos.id} content={todos.title}/>
                    )
                })}
            </Flex>
        </Container>
        
    )
}

export default TodosList