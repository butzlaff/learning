import React, { Fragment, PureComponent } from "react";
import Description_Link from "../../shared/description_with_links";
import GrayImg from "../../shared/gray_img";



const Planet = (props) => {
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
            <Description_Link description={props.description} link={props.link} link_name={props.link_name} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <hr/>
        </div>
    )
}

export default Planet;