import React, { Component } from 'react';
import '../index.css'

export class ProfilePosts extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: "Samantha Barrueta",
    //         timeStamp: "Posted at 9:00 PM",
    //         body: "Today was awesome!"
    //     }
    // }

    render() {
        return (
                <div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{"Today at 10:10 AM"}</h6>
                    <p>{"Just landed a new job!"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{"Today at 8:24 PM"}</h6>
                    <p>{"Lakers in 5"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{"Yesterday at 10:17 PM"}</h6>
                    <p>{"Brick Squad Monopoly"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{" Yesterday at 4:09 PM"}</h6>
                    <p>{"PRGSSN. New Black Women Are The Future Shirts Available for Pre-Order."}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{"Yesterday at 3:17 PM"}</h6>
                    <p>{"Where are the open runs in Hyde Park?"}</p>
                </div>
                <div className="mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{"Yesterday at 2:17 PM"}</h6>
                    <p>{"Yoooooo"}</p>
                </div>
            </div>
        )
    }
}

export default ProfilePosts;