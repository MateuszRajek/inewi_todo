const apiToken = '76b08f7af8102aebe5661796145d8f8118e15480395a03249e07532fb87406e5'

export const createUser = async (body) => {
    const data  = await fetch('https://gorest.co.in/public-api/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body
        })
    })

    const res = await data.json()
    return res.data.id
}
    
export const getTodos = async (userId) => {
    const response = await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
        method: 'GET'
    })

    console.log('get', response)
    return await response.json()
}

export const postTodo = async (body, userId) => {
    try {
        const response = await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...body
            })
        })
        console.log('post', response)
        
    } catch(error) {
        alert(error)
    }
    
    // return getTodos(userId)
}

export const editTodos = async (body, id, userId) => {
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
    return getTodos(userId)
}

export const deleteTodos = async (id, userId) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        }
    })
    return getTodos(userId)
} 

    
