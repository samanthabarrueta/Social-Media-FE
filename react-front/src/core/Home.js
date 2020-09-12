import React from 'react';
import HomeFeed from '../feed/Home';
import Nav from './Nav';
import Container from "react-bootstrap/Container";

const Home = () => (
    <Container>
        <div className="header">
            <h2>Project 3</h2><br /><br />
            <Nav />
        </div>
        <div>
            <HomeFeed />
        </div>
    </Container>
);

export default Home;