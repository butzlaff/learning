import React, { Fragment, useState, useEffect } from "react";
import Post from './post';

async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    let data = await response.json()
    return data;
}

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data)
        })
    }, [])


    return (
        <Fragment>
            <h2>Posts from API</h2>
            {posts.map((post, index) =>
                <Post
                    key={index}
                    title={post.title}
                    body={post.body}
                />
            )}
        </Fragment>
    )
}

export default Posts;