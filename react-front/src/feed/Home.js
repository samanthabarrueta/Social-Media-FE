import React, { Component } from 'react';
import HomePosts from './HomePosts';
import AddPostForm from './AddPostForm';

export class HomeFeed extends Component {
    render() {
        return (
            <div>
                <AddPostForm /> <br /><br />
                <HomePosts />
            </div>
        )
    }
}

export default HomeFeed;
