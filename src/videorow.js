import { Avatar } from "@material-ui/core";
import React from "react";
import "./videorow.css";

function Videorow ({
    views ,
    subs ,
    desc ,
    timestamp ,
    channel,
    title , 
    image,
    avatar
}) {
    return(
        <div className="videorow">
            <img src={image} />
            <div className="videorow-text">
                <h3>{title}</h3>
                <p className="videorow-headline">
                  {views} . {timestamp}
                </p> 
                <div className="name-and-avatar">
        <Avatar className="avatar" src={avatar}/>   <h3 className="channle-name" >{channel}</h3>
             </div> 
             <span className="videorow-span"><span className="span">{subs}</span>  subscribers</span>
               <p className="videorow-desc">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default Videorow;