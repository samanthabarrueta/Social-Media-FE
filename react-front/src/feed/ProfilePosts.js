import React, { Component } from 'react';
import '../index.css'

export class ProfilePosts extends Component {
    render() {
        return (
                <div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Sam Test"}</h5>
                    <h6>{"Sep 15, 2020 2:05 AM"}</h6>
                    <p>{"test post"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Sam Test"}</h5>
                    <h6>{"Sep 15, 2020 12:50 AM"}</h6>
                    <p>{"Testing 456"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Sam Test"}</h5>
                    <h6>{"Sep 8, 2020 7:37 PM"}</h6>
                    <p>{"What do doctors talk about?"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Sam Test"}</h5>
                    <h6>{"Sep 8, 2020 7:05 PM"}</h6>
                    <p>{"Testing 123"}</p>
                </div>
            </div>
        )
    }
}

export default ProfilePosts;