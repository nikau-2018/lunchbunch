import React, { Component } from 'react'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.props.login(this.state.username, this.state.password)
  }

  render () {
    return (
      <div>
        <p>Username: <input className='username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}/>
        </p>
        <p>Password: <input className='password'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Login</button>
        </p>
      </div>
    )
  }
}
