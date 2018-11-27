import React,{Component} from 'react'

class Login extends Component {
    render(){
        return(
            <div className="loginPlusUnder">
            <div className="logIn">
                <p>Have an account?<span>Log in</span></p>
            </div>
            <p className="getApp">Get the app.</p>
            {/* ALL STORES ICONS */}
            <div className="downloads">
                <img src="./static/images/downloadOnAppStore.png" className="appstore"/>
                <img src="./static/images/getOnGooglePlay.png" className="goostore"/>
                <img src="./static/images/getFromMicrosoft.png" className="mic"/>
            </div>
            </div>
        )
    }
}
export default Login;