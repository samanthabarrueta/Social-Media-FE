import React from 'react';
import HomeFeed from '../feed/Home'

const Home = () => (
    <div>
        <div className= "jumbotron">
            <h2>Home</h2>
            <p className= "lead"> Welcome to React Frontend</p>
        </div>
        <div>
            <HomeFeed />
        </div>
    </div>
);

export default Home;