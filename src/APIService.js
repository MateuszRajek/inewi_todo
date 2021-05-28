const apiToken = '76b08f7af8102aebe5661796145d8f8118e15480395a03249e07532fb87406e5'

export const createUser = async (body) => {
    try {
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
    
        const response = await data.json()
        return response.data.id
    } catch(error) {
        alert(error)
    }
    
}
    
export const getTodos = async (userId) => {
    try {
        const response = await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
            method: 'GET'
        })
    
        return await response.json()
        
    } catch(error) {
        alert(error)
    }
}

export const postTodo = async (body, userId) => {
    try {
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
        
    } catch(error) {
        alert(error)
    }  
}

export const editTodos = async (body, id, userId) => {
    try {
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
    } catch(error) {
        alert(error)
    }
}

export const deleteTodos = async (id, userId) => {
    try {
        await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        }
    })
    return getTodos(userId)
    } catch(error) {
        alert(error)
    } 
} 

    
