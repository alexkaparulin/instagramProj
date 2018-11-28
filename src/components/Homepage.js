import React,{Component} from 'react'
import Homepagepost from './Homepagepost';
import Homeuserdata from './Homeuserdata';

class Homepage extends Component {
    render(){
        return(
            <div className="homeMainPage">
            <div className="userPostContainer">
            {/* Post user did */}
              <Homepagepost  user="dsfsd"/>
              <Homepagepost />
              <Homepagepost />
            </div>
               {/* Sticky user information and etc */}
               <Homeuserdata/>
            </div>
        )
    }
}
export default Homepage;