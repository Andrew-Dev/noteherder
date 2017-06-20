import React from 'react'
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return (
        <div className="SignOut">
            <button className="logout" onClick={signOut}>
                <i className="fa fa-sign-out"/>
            </button>
        </div>
        
    )
}

export default SignOut