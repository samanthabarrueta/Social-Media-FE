import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../index.css';
import {Container, Row} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";

export class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: false,
            redirect: false
        }
    }

    handleChange = (name) => (event) => {
        this.setState({[name]: event.target.value});
    };

    clickSubmit = event => {
        event.preventDefault();
        const {name, email, password} = this.state;
        this.setState({ error: false, email: "", password: "" }); 
        const user = {
            name,
            email,
            password
        };
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if(!response.status.ok) {
                this.setState({ error: true });
            } else if (response.status===200) {
                this.setState({ redirect: true });
                this.setState('loggedIn', true);
            } 
        })
        .catch(err => console.log(err));
    };


    render() {
        const {name, email, password, error, redirect} = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }
        return (
            <Container>
                <div className="header">
                <Row><FontAwesomeIcon icon={ faPrescription } size="2x" color="red" /><h2>JARGON</h2></Row>
                <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                    Password must contain at least 6 characters. Password must contain a number.
                </div>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input onChange={this.handleChange("name")} type="text" className="form-control" value={name}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}/>
                    </div>
                    <button onClick={this.clickSubmit} className="btn-raised btn-primary">
                        Create Account
                    </button> {"                               "}
                    <Link to={"/signin"}>
                        <button className="btn-raised btn-success">
                            Log In
                        </button>                        
                    </Link>
                </form>
                </div>
            </Container>
        );
    }
}

export default Signup