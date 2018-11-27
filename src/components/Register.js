import React,{Component} from 'react'

class Register extends Component {
    
    loginWithFacebook() {
        window.location.assign('https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv1.0%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26client_id%3D124024574287414%26ret%3Dlogin%26logger_id%3Df6a53967-45f7-337c-297b-f9552aa70ffd&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=he_IL&logger_id=f6a53967-45f7-337c-297b-f9552aa70ffd');
      }
      loginToHomePage(){
        window.location.assign('http://localhost:3000/')
      }
    render(){
        return(
            <div className="register">
            <img src="./static/images/instagramLogo.png" className="instaLogo"/>
            <p className="p1">Sign up to see photos and videos</p>
            <p className="p2">from your friends.</p>
            <button className="logface" onClick={this.loginWithFacebook}><img src="./static/images/face.png" className="fLogo"/>Log in with Facebook</button>
            <div className="or"><div className="lline"></div>OR<div className="rline"></div></div> 
       {/* INPUTS */}
         <div className="inputs">
             <input type="email" placeholder="Email"></input>
             <input type="text" placeholder="Full Name"></input>
             <input type="text" placeholder="Username"></input>
             <input type="password" placeholder="Password"></input>
         </div>
             <button className="sign" onClick={this.loginToHomePage}>Sign up</button>
             <p className="t1">By signing up, you agree to our</p>
             <p className="t2"><strong>Terms, Data Policy</strong> and <strong>Cookies Policy.</strong></p>
             <p className="t3">Policy.</p>
          </div> 
        )
    }
}
export default Register;