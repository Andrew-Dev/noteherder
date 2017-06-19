import React from 'react'
import './SignIn.css'

const SignIn = ({ authHandler }) => {

    const authenticate = () => {
        authHandler({
            uid: 'aaarasikxjn;skdhfslfhofh'
        })
    }

    return (
        <button className="SignIn" onClick={authenticate}>
            Sign in
        </button>
    )
}

export default SignIn