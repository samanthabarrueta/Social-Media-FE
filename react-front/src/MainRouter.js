import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './core/Home';
import UserProfile from './core/UserProfile';
import Signup from './user/Signup';
import Signin from './user/Signin';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                <li>
                <Link to={"/"} className="nav-link">
                    Home
                    </Link>
                </li>
                </ul>
                </nav>
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