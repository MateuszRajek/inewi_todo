import React, { useState } from 'react';
import { createUser } from '../APIService'
import {Label, Input, Select, Box, Button, Container } from 'theme-ui'
import { useRecoilState } from 'recoil';
import { userIdState } from '../../src/Components/atoms'
import { useHistory } from 'react-router-dom';

const UserCreator = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')
    const [userId, setUserId] = useRecoilState(userIdState)
    const history = useHistory()
    
    const user = {
        email: email,
        name: name,
        gender: gender,
        status: status
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createUser(user).then(data => {
            setUserId(data.data.id)
            history.push('/main')
        })
        
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', margin: '0'}}>
            <Box sx={{width: '320px', maxWidth: '85%'}} as='form' onSubmit={handleSubmit}>
                <Label htmlFor='email'>Email</Label>
                <Input sx={{textTransform: 'lowercase'}} name='email' id='email' mb={3} onChange={event => setEmail(event.target.value)} />
                <Label htmlFor='name'>Name</Label>
                <Input sx={{textTransform: 'none'}} name='name' id='name' mb={3} onChange={event => setName(event.target.value)}/>
                <Label sx={{marginTop: '16px'}} htmlFor='gender'>Gender</Label>
                <Select defaultValue={'-- select an option --'} id='gender' onChange={event => setGender(event.target.value)}>
                    <option defaultValue disabled>-- select an option --</option>
                    <option>Male</option>
                    <option>Female</option>
                </Select>
                <Label sx={{marginTop: '16px'}} htmlFor='status'>Status</Label>
                <Select defaultValue={'-- select an option --'} id='status' onChange={event => setStatus(event.target.value)}>
                    <option disabled>-- select an option --</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </Select>
                    <Button>Submit</Button>
            </Box>
        </Container>
       
    )
}

export default UserCreator