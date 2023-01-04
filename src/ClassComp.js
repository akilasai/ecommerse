import React, { Component } from "react"
class ClassComp extends Component {
    render() {
        <h1>Make your order here</h1>
        let {myData} = this.props
        let {myName} = this.props
        return (<div>Hello This is my class component And the prop passed is {myData}{myName}</div> )
    }
}

export default ClassComp