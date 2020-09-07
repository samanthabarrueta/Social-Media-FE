import React, { Component } from 'react';
import ProfilePosts from './ProfilePosts';
import AddPostForm from './AddPostForm'

export class ProfileFeed extends Component {
    render() {
        return (
            <div>
                <AddPostForm />
                <ProfilePosts />
            </div>
        )
    }
}

export default ProfileFeed
