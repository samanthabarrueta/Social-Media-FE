import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to={"/"} className="nav-link">
                            <FontAwesomeIcon icon={ faHome } size="2x" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/userprofile"} className="nav-link">
                        <FontAwesomeIcon icon={ faUser } size="2x" />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;

