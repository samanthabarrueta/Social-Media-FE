import React, { Component } from 'react';
import Moment from 'moment';

export class AddPostForm extends Component {
    constructor() {
        super()
        this.state = {
            title: Moment().format('lll'),
            body: ""
        }
    }

    handleInputChange = (name) => event => {
        this.setState({[name]: event.target.value});
        
    }

    clickSubmit = event => {
        event.preventDefault();
        //const {title, body} = this.state;
        this.setState({ newPost: true, })
        console.log(this.state)
    };


    render() {
        const {body, newPost} = this.state;
        return (    <>
            <form className="form">
                <div className= "card">
                    <input
                        placeholder="What's on your mind?" onChange={this.handleInputChange("body")} type="text" className="form-control" value={body}/>
                    <button className="btn-raised btn-primary" onClick={this.clickSubmit}>{"Post"}</button>
                </div>
            </form><br />
            
            <div className="mt-5 mb-5 card" style={{display: newPost ? "" : "none"}}>
            <h5>Sam Test</h5>
            <h6>{this.state.title}</h6>
            <p>{this.state.body}</p>
            </div> </>
            
            
            
        )
    }
}

export default AddPostForm