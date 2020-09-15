import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faSearch  } from "@fortawesome/free-solid-svg-icons";


class NavBar extends Component {
    

    render() {
        return (
            <nav className="navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to={"/"} className="nav-link">
                            <FontAwesomeIcon icon={ faHome } size="2x" color="blue" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/userprofile"} className="nav-link">
                        <FontAwesomeIcon icon={ faUser } size="2x" color="blue" />
                        </Link>
                    </li>
                    <li>
                    
                        
                            <input
                            onChange={this.handleInputChange}
                            value={this.value}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search For a User"
                            id="search"
                            />
                    </li>        
                    <li>
                    <Link to={"/userprofile"} className="nav-link">
                    <FontAwesomeIcon icon={ faSearch } size="2x" />
                    </Link>
                    </li>
                            
                        
                        
                    
                </ul>
            </nav>
        )
    }
}

export default NavBar;

