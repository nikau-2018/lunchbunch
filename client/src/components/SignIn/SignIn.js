import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import SignInForm from '../SignInForm'
import RegisterForm from '../RegisterForm'

import './SignIn.css'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signin: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    this.setState({
      signin: !this.state.signin
    })
  }

  render () {
    // Confused by this syntax? It's just another destructure, but we're looking for the inside
    // contents of `currentUser`! See
    // https://javascript.info/destructuring-assignment#nested-destructuring for more info
    const { currentUser: { error, pending, user }, signIn } = this.props

    // Still waiting for request to finish
    if (pending) {
      return (
        <div>Logging in...</div>
      )
    }

    // We have a user, don't show <SignInForm />
    if (user) {
      return (
        <Redirect to='profile' />
      )
    }

    return (
      <div style={{padding: 40}} className='container signIn'>
        <div>
          {this.state.signin
            ? <SignInForm error={error} signIn={signIn} />
            : <RegisterForm />}
        </div>
      </div>
    )
  }
}
