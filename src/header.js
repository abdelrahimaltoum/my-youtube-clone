import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Header() {

    
    const [inputsearch , setinputsearch] = useState("");
    return(
        <div className="header">
            <div className="header-left">
        <MenuIcon/>
        <Link to="/">
        <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" />
       </Link>
        </div>

        <div className="header-input">
        <input type="text" placeholder="search" value={inputsearch} onChange={e => setinputsearch(e.target.value)}/>
      <Link to= "/searchpage">
        <SearchIcon className="header-input-button"/>
        </Link>
        </div>
        <div className="header-icons">
        <VideoCallIcon className="header-icon"/>
        <AppsIcon className="header-icon"/>
        <NotificationsIcon className="header-icon"/>
        <Avatar src="https://yt3.ggpht.com/yti/AHXOFjXw_6G7H_5vgKxePdH5AW6e-0AGLXdvJ-tljg=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
        </div>
    )
}
export default Header;