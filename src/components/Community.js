import React from 'react'
import { withRouter } from 'react-router'
class Community extends React.Component {
  render() {
    return (
      <ul className="container-fluid row m-0 p-0" >
        <p className="col-sm-12">Community</p>
        <li className="list-inline-item row col-sm-12 m-0 p-0">
          <a href="/" alt="home">Home</a>
        </li>
      </ul>
    )  //  return
  }  //  render
}  //  Maude
export default withRouter(Community)
