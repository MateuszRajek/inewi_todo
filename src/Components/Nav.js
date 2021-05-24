import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, Input } from 'theme-ui'

const Nav = ({ showCompleted, showALl, setSearchInputValue }) => {

    const onInputChange = event => {
      setSearchInputValue(event.target.value)
    }

    return (
        <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}as="nav">
          <Button sx={{backgroundColor: '#a8a8a8', ':hover': {backgroundColor: 'white', color: '#a8a8a8', boxShadow: '0 0 3px #a8a8a8'}}} 
           onClick={showALl}>Main
          </Button>
          <Button sx={{backgroundColor: '#a8a8a8', ':hover': {backgroundColor: 'white', color: '#a8a8a8',boxShadow: '0 0 3px #a8a8a8'}}}
           onClick={showCompleted}>Completed
          </Button>
          <Link to='/stats'>
            <Button sx={{backgroundColor: '#a8a8a8',':hover': {backgroundColor: 'white', color: '#a8a8a8', 
             boxShadow: '0 0 3px #a8a8a8'}}}>Statistics
            </Button>
          </Link>
          <Input sx={{maxWidth: '50%'}} placeholder={'Search'} onChange={onInputChange} ></Input>
          <Button sx={{backgroundColor: '#4682b4', ':hover': {backgroundColor: 'white', color: '#4682b4', boxShadow: '0 0 3px #4682b4'}}}
            type='submit'>Search
          </Button>
      </Flex>
    )
}

export default Nav