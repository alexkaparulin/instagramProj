import React,{Component} from 'react';
import Likefromperson from './Likefromperson';

class Likes extends Component{
    closeLikesContainer(){
         document.querySelector('.likeBar').style.display='none';
         document.querySelector('.triangle').style.display='none';
         document.querySelector('.bline').style.display='none';
    }
render(){
    return(
        <div>
            <span className="close" onClick={this.closeLikesContainer}>&times;</span>
           <Likefromperson  user="Mark_zuker2" time="3s"/>
           <Likefromperson  user="DavidKern"   time="2m"/>
           <Likefromperson  user="Gym_sports" time="2m" />
           <Likefromperson  user="Iverson_akf" time="2m"/>
           <Likefromperson  user="Brayney23" time="4m"/>
           <Likefromperson  user="Donatelo"    time="6m"/>
           <Likefromperson  user="BlaclintheBending" time="9m" />
         </div>
    )
}

}
export default Likes;