import React from "react";
import "./sidebarrow.css";

function Sidebarrow({Icon,title , selected}){
    return(
        <div className={`sidebarrow ${selected &&"selected"}`}>
            <Icon className="sidebarrow-icon "/>
            <h2 className="sidebarrow-title">{title}</h2>
        </div>
    )
}
export default Sidebarrow;