import React from 'react';
import { Card, Checkbox, Heading, Label } from 'theme-ui'


const Todos = ({content}) => {
    let checked
    switch(content.completed) {
        case 'true': 
        checked = true
        break;
        case 'false':
        checked = false
        break;
        default: 
    }

    return (
        <Card>
            <Heading as='h3'>{content}</Heading>
            <Label>
                <Checkbox defaultChecked={checked}/>
                Completed
            </Label>
        </Card>
    )
}

export default Todos