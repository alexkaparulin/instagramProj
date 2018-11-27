import React,{Component} from 'react';
import { Router, Route, Link } from "react-router-dom";
import Signupbottom from './Signupbottom'
import Iphonepic from './Iphonepic';
import Register from './Register';
import Login from './Login';

class Signup extends Component  {

 render(){
    return(
<div className="mfrontPage">                {/*Main div*/}
    <div className="frontPage">             {/*DIV CONNECT UI  */}
      <Iphonepic />                       {/* Iphones component */}
      <Register />                        {/* REGISTER Component */}
    </div>
      <Login />                                {/* LOGING FOR HAVING ACCOUNT */}
      <Signupbottom /> {/* LINKS IN THE BOTTOM OF THE FRONT PAGE */}
</div>
    )
 }
}

export default Signup;