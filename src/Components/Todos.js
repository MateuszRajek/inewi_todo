import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Button, Card, Checkbox, Flex, Input, Label } from 'theme-ui'
import { todoListState } from './atoms';
import TodosList from './TodosList';


const Todos = ({ item, editTodos, deleteTodos }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const body = {
        title: todoList[index].title,
        completed: todoList[index].completed
    }

    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        title: value,
        });

        setTodoList(newList);
    }

    const updateText = (body, id) => {
        editTodos(body, id)
    }

    const toggleCompleted = () => {
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          completed: !item.completed,
          
        });
        setTodoList(newList);
        editTodos(body, item.id)
}

    const replaceItemAtIndex = (arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    return (
        <Card>
            <Flex sx={{justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <Input onChange={editItemText} defaultValue={item.title} />
                <Label sx={{width: 'auto'}}>
                    <Checkbox defaultChecked={item.completed} onClick={() => toggleCompleted()}/>
                    Completed
                </Label>
            </Flex>
            <Flex sx={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Button onClick={() => updateText(body, item.id)}>Save Changes</Button>
                <Button onClick={() => deleteTodos(item.id)}>Delete</Button>
            </Flex> 
        </Card>
    )
}

export default Todos