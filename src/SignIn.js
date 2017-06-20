import React, { Component } from 'react'
import './SignIn.css'
import { auth, githubProvider } from './base'
import quill from './quill.svg'

class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        auth.onAuthStateChanged((user) => {
            this.setState({email: '', password: ''})
        })
    }

    authenticateGithub = () => {
        auth.signInWithPopup(githubProvider)
    }

    authenticatePassword = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            const errorCode = error.code
            const errorMessage = error.message
            alert(errorMessage)
        });
    }

    registerUser = () => {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            const errorCode = error.code
            const errorMessage = error.message
            alert(errorMessage)
        });
    }
    
    render() {
        return (
            <div>
                <div className="loginLogo">
                    <img src={quill} alt="Noteherder" />
                </div>
                <h1 className="loginTitle">NOTEHERDER</h1>
                <h2 className="loginSubtitle">Take notes, beautifully.</h2>
                <div className="loginForm">
                        <p className="formItem"><input type="text" name="email" placeholder="E-Mail" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})}/></p>
                        <p className="formItem"><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})}/></p>
                        <button className="signIn" onClick={this.authenticatePassword}>
                            <i className="fa fa-sign-in"/> Sign in
                        </button>
                        <button className="signUp" onClick={this.registerUser}>
                            <i className="fa fa-user-plus"/> Create account
                        </button>
                        <button className="signInGH" onClick={this.authenticateGithub}>
                            <i className="fa fa-github"/> Sign in with GitHub
                        </button>
                </div>
            </div>
            
        )
    }
    
}

export default SignIn