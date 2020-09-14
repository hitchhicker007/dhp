import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        console.log("WELCOME");
        return (
            <div className="container">
                <h1>Welcome</h1>
            </div>
        )
    }
}
