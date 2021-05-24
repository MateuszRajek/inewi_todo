import React from 'react';
import { Label,Input, Box, Button } from 'theme-ui'

const AddTodos = ({onSubmit, onChange, value}) => {


    return (
        <Box sx={{margin: '30px 5px'}} as='form' onSubmit={onSubmit}>
            <Label sx={{fontSize: '24px'}} >Add todos</Label>
            <Input value={value} placeholder={'Type what to do'} onChange={onChange}></Input>
            <Button sx={{backgroundColor: '#4682b4', ':hover': {backgroundColor: 'white', color: '#4682b4', boxShadow: '0 0 3px #4682b4'}}} 
                type='submit'>Submit
            </Button>
        </Box>
    )
}

export default AddTodos