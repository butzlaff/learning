import React, { Fragment, PureComponent } from "react";
import Description_Link from "../../shared/description_with_links";
import GrayImg from "../../shared/gray_img";


const Planet = (props) => {
    return (
        <div>
        <h4>{props.name}</h4>
        <Description_Link description={props.description} link={props.link} link_name={props.link_name}/>
        <GrayImg img_url={props.img_url}/>
        </div>
    )}
 
    export default Planet;