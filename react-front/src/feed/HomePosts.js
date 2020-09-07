import React, { Component } from 'react';
import '../index.css'

export class HomePost extends Component {
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
                <div className= "mt-5 mb-5 card">
                    <h5>{"Samantha Barrueta"}</h5>
                    <h6>{"Today at 10:00 AM"}</h6>
                    <p>{"Just landed a new job!"}</p>
            </div>
            <div className= "mt-5 mb-5 card">
                    <h5>{"Mohammad Jihad Uddin"}</h5>
                    <h6>{"Today at 12:05 PM"}</h6>
                    <p>{"Got my first interview!"}</p>
            </div>
            <div className= "mt-5 mb-5 card">
                    <h5>{"Shelsea Yilmaz"}</h5>
                    <h6>{"Yesterday at 9:35 PM"}</h6>
                    <p>{"I love the coding class I'm in!"}</p>
            </div>
            <div className= "mt-5 mb-5 card">
                    <h5>{"Gentry Hunt"}</h5>
                    <h6>{" Yesterday at 4:05 PM"}</h6>
                    <p>{"PRGSSN. Check out the new merch."}</p>
            </div>
            <div className= "mt-5 mb-5 card">
                    <h5>{"Mariya Kirichenko"}</h5>
                    <h6>{"Yesterday at 4:00 PM"}</h6>
                    <p>{"Just moved into my apartment. Any good furniture stores in the Edgewater area?"}</p>
            </div>
            <div className= "mt-5 mb-5 card">
                    <h5>{"Paul Cruse"}</h5>
                    <h6>{"Yesterday at 2:17 PM"}</h6>
                    <p>{"Another recruiter just slid in my LinkedIn DM's "}</p>
            </div>
            </div>
        )
    }
}

export default HomePost;