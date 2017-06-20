import React from 'react'

const SignOut = ({ signOut }) => {
    return (
        <button className="logout" onClick={signOut}>
          <i className="fa fa-sign-out"/>
        </button>
    )
}

export default SignOut