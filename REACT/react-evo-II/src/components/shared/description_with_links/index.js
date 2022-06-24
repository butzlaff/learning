import React, { Fragment } from "react";


function Onlick(){
    console.log('Meu primeiro event')
}


const DescriptionWithLink = (props) => {
    return (
        <Fragment>
        <p>{props.description}</p>
        <p>
            <a href={props.link}>{props.link_name}</a></p>
        </Fragment>           
    )
}

export default DescriptionWithLink;