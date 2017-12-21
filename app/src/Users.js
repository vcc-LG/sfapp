import React, { Component } from 'react';

const urlForUsers =
  `http://localhost:3000/users`

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForUsers)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          usersData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.usersData) return <p>Loading...</p>
    var namesList = this.state.usersData.map(function(el){return <li>{el.name}</li>;})
    return (
      <div>
      <h1>Current users</h1>
        <h2>{namesList}</h2>
      </div>
    )
  }
}


export default Users;
