import React, { Fragment, PureComponent, useEffect, useState } from "react";
import Planets from "..";
import Description_Link from "../../shared/description_with_links";
import GrayImg from "../../shared/gray_img";

async function getSattelites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

const Planet = (props) => {
    const [satellites, setSattelites] = useState([])

        useEffect(() => {
            getSattelites(props.id).then(data => {
                setSattelites(data['satellites'])
            })
        }, [])

        let title;
        if (props.title_with_underline) {
            title = <h4><u>{props.name}</u></h4>
        } else {
            title = <h4>{props.name}</h4>
        }

    return (

        <div>
            {title}
            <p />
            <Description_Link description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <h4>Satellites</h4>
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
        </div>
    )
}

export default Planet;