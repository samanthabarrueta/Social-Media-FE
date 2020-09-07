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
            <form>
                <div className= "card">
                    <input
                        placeholder="What's on your mind?">
                    </input>
                    <button>{"Post"}</button>
                </div>
            </form>
            
        )
    }
}

export default AddPostForm