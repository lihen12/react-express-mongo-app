import React, { useEffect, useState } from "react"
import { useUsersContext } from "../hooks/useUsersContext.js"

// components
import UserDetails from '../components/UserDetails.js'
import UserForm from "../components/UserForm.js"

const Home = () => {
    const {users, dispatch} = useUsersContext()
    const [query, setQuery] = useState("")


    // only fire this function when the page first renders
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:8080/api/users')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_USERS', payload: json})
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="home">
            <div className="users">
                <div>
                    <input placeholder="Enter username" onChange={event => setQuery(event.target.value)}/>
                </div>

                {users && users.filter(user => {
                    if (query === '') {
                        return user;
                    } else if (user.username.toLowerCase().includes(query.toLowerCase())) {
                        return user;
                    }
                }).map((user) => (
                    <UserDetails key={user._id} user={user}/>
                ))}
            </div>
            <UserForm />
        </div>
    )
}

export default Home