import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./channelrow.css";
 function Channelrow({image ,channel , subs , desc , verified , numofvideos}){
    return(
        <div className="channelrow">
            <Avatar className="channelrow-logo" src={image}/>
            <div className="channelrow-text">
                <h4>{channel} {verified && <VerifiedUser/>}</h4>
                <p>
                    {subs} Subscribtions . {numofvideos} Videos
                </p>
                <p>
                    {desc}
                </p>
            </div>
            
        </div>
    )
 }
 export default Channelrow;