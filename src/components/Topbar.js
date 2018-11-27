import React from 'react';
import Search from './Search';

const TopBar = ({children})=> {
    return(
        <div className="top-bar">
        {/* Links that are injected into Children */}
            {children}
            <img className="logo" src="static/images/isi.png" alt="logo"/>
            <div className="topbarLine"></div>
            <img src="static/images/instagramLogo.png" className="topbarIconInstagram"/>
            <Search />
        </div>
    )   
}
export default TopBar;