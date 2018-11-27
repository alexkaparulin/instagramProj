import React,{Component} from 'react';

class Likefromperson extends Component{
    render(){
        return(
            <div className="photoLikes">
            <img src="./static/images/face.png" className="personliked"/>
            <p><span>{this.props.user}</span>liked your photo.{this.props.time}</p>
            <img src="./static/images/FrontInstaExamaple1.jpg" className="photoLiked"/>
          </div>
        )
    }
}

export default Likefromperson;