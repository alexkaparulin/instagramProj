import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route
} from 'react-router-dom';

import TopBar from './TopBar'; 
import Links from './Links';
import Homepage from './Homepage';
import Signup from './Signup';
import Explore from './Explore'

const App = ()=> (
            <div className="main-app">
                <TopBar><Links /></TopBar>
                <Route exact path="/"  render={ ()=>  <Homepage />  }/>
                <Route path="/explore" component={Explore}></Route>
                {/* <Route path="/" component={Likes}></Route> */}
		        {/* <Route path="/username" component={Username}></Route>
		        <Route path="/login" component={Login}></Route> */}
		        <Route path="/signup" component={Signup}></Route>
            </div>
)
export default App;