import React, { Component } from 'react';

export class AddPostForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            timeStamp: "",
            body: ""
        }
    }

    render() {
        return (            
            <form className="form">
                <div className= "card">
                    <input
                        placeholder="What's on your mind?">
                    </input>
                    <button className="btn-raised btn-secondary">{"Post"}</button>
                </div>
            </form>
            
        )
    }
}

export default AddPostForm