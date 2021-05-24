import React from 'react';
import { useRecoilState } from 'recoil';
import { Button, Card, Checkbox, Flex, Input, Label } from 'theme-ui'
import { todosListState } from './atoms';

const Todos = ({ item, editTodos, deleteTodos }) => {
    const [todosList, updatetodosList] = useRecoilState(todosListState);
    const index = todosList.findIndex((listItem) => listItem === item);

    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todosList, index, {
        ...item,
        title: value,
        });
        updatetodosList(newList);
    }

    const updateText = () => {
        const body = {
            title: todosList[index].title,
            completed: todosList[index].completed
        }
        editTodos(body, item.id)
    }

    const toggleCompleted = () => {
        const newList = replaceItemAtIndex(todosList, index, {
          ...item,
          completed: !item.completed,
        });
        updatetodosList(newList);
        const body = {
            title: newList[index].title,
            completed: newList[index].completed
        }
        editTodos(body, item.id)
    }

    const deleteItem = (id) => {
        const newList = removeItemAtIndex(todosList, index);
        updatetodosList(newList);
        deleteTodos(id)
      };

    const replaceItemAtIndex = (arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }
 
    const removeItemAtIndex = (arr, index) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    return (
        <Card>
            <Flex sx={{justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <Input onChange={editItemText} defaultValue={item.title} />
                <Label sx={{width: 'auto'}}>
                    <Checkbox type='checkbox' checked={item.completed} onChange={() => toggleCompleted()}/>
                    Completed
                </Label>
            </Flex>
            <Flex sx={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Button sx={{backgroundColor: '#5bc7a3'}}onClick={() => updateText()}>Save Changes</Button>
                <Button sx={{backgroundColor: '#cf3b21'}}onClick={() => deleteItem(item.id)}>Delete</Button>
            </Flex> 
        </Card>
    )
}

export default Todos