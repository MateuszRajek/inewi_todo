const apiToken = '76b08f7af8102aebe5661796145d8f8118e15480395a03249e07532fb87406e5'


export const createUser = async () => {
    const data  = await fetch('https://gorest.co.in/public-api/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                email: 'mata3dsssz_rajek@wp.pl',
                name: 'Mateusz Rajek',
                gender: 'Male',
                status: 'Active'
        })
    }).then(resp => resp.json()).then(data => data).then(result => result.data.id)
    console.log(data)
    return data
}

const userId = createUser()
console.log(createUser())
export const getTodos = async () => {
    // console.log('get', userId)
    const response = await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
        method: 'GET'
    })
    return await response.json()
}

export const postTodo = async (body) => {
    // console.log('post', userId)
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
    return getTodos(userId)
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
    return getTodos(userId)
}

export const deleteTodos = async (id) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        }
    })
    return getTodos(userId)
} 

    
