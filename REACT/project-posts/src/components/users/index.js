import React, { Fragment, useState, useEffect } from "react";
import Posts from './'

async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/")
    let data = await response.json()
    console.log(data)
    return data;
}

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
        })
    }, [])


    return (
        <Fragment>
        <h2>Users from API</h2>
        {users.map((user, index) =>
                <Posts
                key={index}
                id={user.id}
                name={user.name}
                email={user.email}
                />
            )}
        </Fragment>
    )
}   
export default Users;