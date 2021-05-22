const apiToken = '76b08f7af8102aebe5661796145d8f8118e15480395a03249e07532fb87406e5'
const userId = 1336
    
export const getTodos = async () => {
    const response = await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
    })
    return await response.json()
}

export const postTodo = async (body) => {
    await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body
        })
    })
    return getTodos()
}

export const editTodos = async (body, id) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body
        })
    })
    return getTodos()
}

export const deleteTodos = async (id) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        }
    })
    return getTodos()
} 

    
