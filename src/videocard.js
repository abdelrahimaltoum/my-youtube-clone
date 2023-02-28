import { Avatar } from "@material-ui/core";
import React from "react";
import "./videocard.css";

function Videocard({image , title ,channel ,timestamp , channleimage , views}){
    return(
    <div className="videocard">
        <img src={image} className="videocard-image"/>
        <div className="videocard-info">
        <Avatar className="videocard-avatar" src={channleimage}/>
        <div className="videocard-text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} . {timestamp}
            </p>
        </div>
        </div>
    </div>
    )
}
export default Videocard;