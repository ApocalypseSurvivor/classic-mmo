import React from 'react'
import '../styles/Counter.css';

// https://codepen.io/ashlewis/pen/dwxnq
class Counter extends React.Component {
  render() {
    return (
      <div className="number">
        <div className="section top"></div>
        <div className="section top-right"></div>
        <div className="section top-left"></div>
        <div className="middle"></div>
        <div className="section bottom-right"></div>
        <div className="section bottom-left"></div>
        <div className="section bottom"></div>
      </div>
    )  //  return
  }  //  render
}  //  Counter

export default Counter
