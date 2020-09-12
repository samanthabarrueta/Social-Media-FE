import React from 'react';
import Profile from '../feed/Profile';
import Nav from './Nav';
import {Container, Row} from "react-bootstrap/";

const UserProfile = () => (
    <Container>
        <Row><h2>Project 3</h2> <Nav /></Row>
        <Profile />
    </Container>
);

export default UserProfile;