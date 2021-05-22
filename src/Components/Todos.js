import React from 'react';
import { useRecoilState } from 'recoil';
import { Button, Card, Checkbox, Flex, Input, Label } from 'theme-ui'
import { todoListState } from './atoms';

const Todos = ({ item, editTodos, deleteTodos }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        title: value,
        });
        setTodoList(newList);
    }

    const updateText = () => {
        const body = {
            title: todoList[index].title,
            completed: todoList[index].completed
        }
        editTodos(body, item.id)
    }

    const toggleCompleted = () => {
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          completed: !item.completed,
        });
        setTodoList(newList);
        const body = {
            title: newList[index].title,
            completed: newList[index].completed
        }
        editTodos(body, item.id)
    }

    const deleteItem = (id) => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
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
                <Button onClick={() => updateText()}>Save Changes</Button>
                <Button onClick={() => deleteItem(item.id)}>Delete</Button>
            </Flex> 
        </Card>
    )
}

export default Todos