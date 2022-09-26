import React, { Fragment, useState, useEffect } from "react";
import Users from "..";

async function getPosts(userId) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    let data = await response.json()
    data_user = data.userId
    return data;
}

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts(props.userId).then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <h2>Posts from API</h2>
            <ul>

            </ul>
        </div>
    )
}

export default Posts;