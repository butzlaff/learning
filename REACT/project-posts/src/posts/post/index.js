import React from "react";

const Post = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>
            {props.body}
            </p>
            <hr />
        </div>
    )
}


export default Post;