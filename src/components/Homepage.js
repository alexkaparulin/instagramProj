import React,{Component} from 'react'

class Homepage extends Component {
    render(){
        return(
            <div className="homeMainPage">
            {/* Post user did */}
               <div className="userPost">
                 <div className="userBio">
                 
                 </div> 
               </div>
               {/* Stickey user information and etc */}
               <div className="userData">
                  <div className="userPicName"></div>
                  <div className="userFriendsStory"></div>
                  <div className="userFriendSugg"></div>
                  <div className="userLinksList">
                    <ul>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                  </div>
                </div>
            </div>
        )
    }
}
export default Homepage;