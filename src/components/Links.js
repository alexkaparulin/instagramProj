import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
import Likes from './Likes';


class Links extends Component {
    showLikesBar(){
        document.querySelector('.likeBar').style.display='flex';
        document.querySelector('.triangle').style.display='flex';
        document.querySelector('.bline').style.display='flex';
          }
    render(){
        return(
    <ul className="link-bar">  {/**TOPBAR RIGHT LINKS */}
        <li>
            <Link to="/explore" className="nav-link">
            <img src="static/images/explore.png" className="exIcon"/></Link></li>
        <li>
            <Link to=""><img src="static/images/like.png" className="likeIcon" onClick={this.showLikesBar}/>
            <img src="static/images/triangle (2).png" className="triangle"/>
            <div className="bline"></div>
            <div className="likeBar"><Likes /></div> {/* Onclick like icon Likes component opens */}</Link></li>
        <li>
            <Link to="/username" className="nav-link">
            <img src="static/images/userIcon.png" className="userIcon"/></Link></li>
        <li>
            <Link to="/login" className="topbarLog">Login</Link></li>
        <li>
            <Link to="/signup" className="topbarsignup">Sign up</Link></li>
    </ul>
)
}
}
export default Links;