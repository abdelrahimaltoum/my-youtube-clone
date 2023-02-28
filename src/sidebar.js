import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Sidebarrow from "./sidebarrow";
import { Whatshot } from "@material-ui/icons";

function Sidebar(){
    return(
        <div className="sidebar">
            <Sidebarrow selected Icon={HomeIcon} title="Home"/>
            <Sidebarrow Icon={Whatshot} title="Trendng"/>
            <Sidebarrow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <Sidebarrow Icon={VideoLibraryIcon} title="Libarary"/>
            <Sidebarrow Icon={HistoryIcon} title="History"/>
            <Sidebarrow Icon={OndemandVideoIcon} title="Your Videos"/>
            <Sidebarrow Icon={WatchLaterIcon} title="Watch Later"/>
            <Sidebarrow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <Sidebarrow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr/>
        </div>
    )
}
export default Sidebar;