import React from 'react';
import Profile from '../feed/Profile';
import Nav from './Nav';
import {Container, Row} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPrescription } from "@fortawesome/free-solid-svg-icons";


const UserProfile = () => (
    <Container>
        <div className="header">
        <Row><FontAwesomeIcon icon={ faPrescription } size="2x" color="red" /><h2>JARGON</h2> <Nav /></Row>
        </div>
        <div>
        <center><FontAwesomeIcon icon={ faUser } size="6x" /></center>
        <center><h1>Sam Test</h1></center>
        </div>        
        <Profile />
    </Container>
);

export default UserProfile;