import React,{Component} from 'react';


class Iphonepic extends Component{
    
    updating(){
        const pic = document.querySelector('.picChange');
        const images = [
            "./static/images/FrontInstaExamaple2.jpg",
            "./static/images/FrontInstaExamaple3.jpg",
            "./static/images/FrontInstaExamaple4.jpg",
            "./static/images/FrontInstaExamaple5.jpg",
            "./static/images/FrontInstaExamaple1.jpg",
        ];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
             let i = 0;
             setInterval(function(){
                 pic.style.backgroundImage = "url("+ images[i]+")";
                 i = i + 1;
      if (i == images.length) {
        i =  0;
      }
             }, 3500)
         
    } 
    componentDidMount(){
        this.updating();
    }
    render(){
        return(
            <div className="iphones">
            <div className="picChange" >
            </div>
             <img src="./static/images/FrontITwophones.png"/>{/* IPHONES IMAGES */}
           </div>
        )
    }
}
export default Iphonepic;