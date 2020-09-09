import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './core/Home';
import UserProfile from './core/UserProfile';
import Signup from './user/Signup';
import Signin from './user/Signin';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/userprofile" component={UserProfile} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter;