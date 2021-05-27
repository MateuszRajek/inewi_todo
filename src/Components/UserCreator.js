import React from 'react';
import { createUser } from '../APIService'
import {Box, Button, Container, Image, Paragraph } from 'theme-ui';
import smile from '../assets/smile.png';
import { useHistory } from 'react-router-dom';

const UserCreator = () => {
    const history = useHistory()
    
    const user = {
        email: `${Math.floor(Math.random()*9000)}@mail.com`,
        name: 'User',
        gender: 'Male',
        status: 'Active'
    }

    const adduserIdToLocalStorage = id => {
        localStorage.setItem('userId:', JSON.stringify(id))
    }

    const addUser = async (event) => {
        event.preventDefault()
        const id = await createUser(user)
        adduserIdToLocalStorage(id)
        history.push('/main')
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', margin: '0'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '320px', maxWidth: '85%'}} 
            onClick={addUser}>
                <Paragraph sx={{textAlign: 'center'}}>
                    To run this App you must create the User account. But do not worry. Just click the button and let the magic happen:
                </Paragraph>
                <Image src={smile}/>
                <Button sx={{backgroundColor: '#4682b4', ':hover': {backgroundColor: 'white', color: '#4682b4', boxShadow: '0 0 3px #4682b4'}}}
                >Run the App</Button>
            </Box>
        </Container>
    )
}

export default UserCreator