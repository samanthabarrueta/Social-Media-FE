import React, { Component } from 'react';
import HomePosts from './HomePosts';
import AddPostForm from './AddPostForm';
import Nav from '../core/Nav';

export class HomeFeed extends Component {
    render() {
        return (
            <div>
                <Nav />
                <AddPostForm />
                <HomePosts />
            </div>
        )
    }
}

export default HomeFeed;
