import React, { Component } from 'react';
import './counter.css';
import pf1 from './Images/img1.jpg';


export default class Countclass extends Component 
{
    constructor(props){
        super();
this.state={ counter:0}
}
Increment(){
    this.setState({
        counter: this.state.counter+1
    });
}
Decrement(){
        this.setState({
            counter:this.state.counter-1
        })
}
  render() {

    return (
      
      <div style={{backgroundColor:'greenyellow',left:'600px',top:'200px',position:'absolute',height:'300px',width:'300px'}}>
      <div ><h1>This is class component</h1>
      
            <button onClick={this.Increment.bind(this)}className="counterbutton">Inc</button>
            <span>{this.state.counter}</span>
            <button onClick={this.Decrement.bind(this)} className="counterbutton">Dec</button>
            <div><img src={pf1}></img></div>
            </div></div>
            
      
    )
  }
}