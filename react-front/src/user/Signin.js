import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row} from "react-bootstrap/";

import '../index.css';
export class Signin extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }

    handleChange = (name) => (event) => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
    };

    clickSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        const user = {
            email,
            password
        };
        // console.log(user);
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    render() {
        const {email, password, error} = this.state;
        return (
            <Container>
                <Row><h3>Project 3</h3></Row>
                <div className="header">
                <div className="alert alert-primary" style={{display: error ? "" : "none"}}>
                    {error}
                </div>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}/>
                    </div>
                </form>
                <Row className="nav-link">
                    <button onClick={this.clickSubmit} className="btn-raised btn-secondary">
                        Log In
                    </button> {"                               "}
                    <Link to={"/signup"}>
                        <button className="btn-raised btn-secondary">
                            Create an Account
                        </button>                        
                    </Link>
                </Row>   
                </div>             
            </Container>
        );
    }
}

export default Signin