import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import Image from '.././img.jpg';
import '../index.css';


export class Signin extends Component {
    constructor() {
        super()
        this.state = {
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
        const {email, password} = this.state;
        this.setState({ error: false, email: "", password: "" }); 
        const user = {
            email,
            password
        };
        fetch("http://localhost:8080/signin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if(response.status===401) {
                this.setState({ error: true });
            } else if (response.status===200) {
                this.setState({ redirect: true });
                this.setState({loggedIn: true});
            } 
        })
        .catch(err => console.log(err));
    };

    render() {
        const {email, password, error, redirect} = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }        
            return (
                <Container>
                <div className="header">
                <Row><FontAwesomeIcon icon={ faPrescription } size="2x" color="red" /><h2>JARGON</h2></Row>
                <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                    Your login information is incorrect. Please try again.
                </div>

                <Row>
                    <Col>
                        <img src={Image} alt="Doctors"  width="450px" />
                    </Col>
                    <Col>
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
                    </Col>
                </Row>

                <Row className="nav-link">
                    <button onClick={this.clickSubmit} className="btn-raised btn-success">
                        Log In
                    </button> {"                               "}
                    <Link to={"/signup"}>
                        <button className="btn-raised btn-primary">
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