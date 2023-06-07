import React, { useState } from "react"
import { useUsersContext } from "../hooks/useUsersContext.js"

const UserForm = () => {
    const { dispatch } = useUsersContext()

    const [username, setUsername] = useState('')
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {username, value}

        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setUsername('')
            setValue('')
            setError(null)
            console.log('New user added', json)
            dispatch({type: 'CREATE_USER', payload: json})
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New User</h3>

            <label>Username: </label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Value: </label>
            <input
                type="number"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            
            <button>Add User</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default UserForm