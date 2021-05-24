import React from 'react';
import { Label,Input, Box, Button } from 'theme-ui'

const AddTodos = ({onSubmit, onChange, value}) => {


    return (
        <Box as='form' onSubmit={onSubmit}>
            <Label>Add todos</Label>
            <Input value={value} placeholder={'Type what to do'} onChange={onChange}></Input>
            <Button sx={{backgroundColor: '#4682b4'}}type='submit'>Submit</Button>
        </Box>
    )
}

export default AddTodos