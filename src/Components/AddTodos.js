import React from 'react';
import { Label,Input, Box, Button } from 'theme-ui'

const AddTodos = ({onSubmit, onChange}) => {


    return (
        <Box as='form' onSubmit={onSubmit}>
            <Label>Add todos</Label>
            <Input placeholder={'Type what to do'} onChange={onChange}></Input>
            <Button type='submit'>Submit</Button>
        </Box>
    )
}

export default AddTodos