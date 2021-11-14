import React from "react";
import './sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebaroptions from "./sidebaroptions";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar(){
    return(
        <div className="Sidebar">
        <TwitterIcon />
        <Sidebaroptions active text='home' Icon={HomeIcon}/>
        <Sidebaroptions text='search' Icon={SearchIcon}/>
        <Sidebaroptions text='notifications' Icon={NotificationsIcon}/>
        <Sidebaroptions text='message' Icon={MailOutlineIcon}/>
        <Sidebaroptions text='bookmark' Icon={BookmarkIcon}/>
        <Sidebaroptions text='list' Icon={ListAltIcon}/>
        <Sidebaroptions text='profile' Icon={PermIdentityIcon}/>
        <Sidebaroptions text='more' Icon={MoreHorizIcon}/>

        <Button varient="outlined" className="sidebar-tweet" fullWidth>tweet</Button>
        </div>
    );
}

export default Sidebar;