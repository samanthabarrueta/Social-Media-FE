import React from 'react';
import HomeFeed from '../feed/Home';
import Nav from './Nav';
import {Container, Row} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
    <Container>
        <div className="header">
        <Row><FontAwesomeIcon icon={ faPrescription } size="2x" color="red" /><h2>JARGON</h2><Nav /></Row>
        </div>
        <div>
            <HomeFeed />
        </div>
    </Container>
);

export default Home;