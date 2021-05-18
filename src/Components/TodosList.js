/** @jsxImportSource theme-ui */
import { Container, Flex } from "@theme-ui/components"
import Todos from "./Todos"


const TodosList = () => {

    return(
        <Container>
            <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
                <Todos></Todos>
                <Todos></Todos>
                <Todos></Todos>
                <Todos></Todos>
            </Flex>
        </Container>
        
    )
}

export default TodosList