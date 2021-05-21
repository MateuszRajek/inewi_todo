import React from 'react';
import { Button, Card, Flex, Input } from 'theme-ui'


const TodosModal = ({content, onClick}) => {
   
    return (
        <Flex sx={{position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', justifyContent: 'center', alignItems: 'center'}}>
            <Card>
                <Flex sx={{justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                    <Input value={content} as='h3'>{content}</Input>
                </Flex>
                <Flex sx={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Button onclick={onClick}>Save</Button>
                    <Button>Delete</Button>
                </Flex>  
            </Card>
        </Flex>
        
    )
}

export default TodosModal