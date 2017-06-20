import React, { Component } from 'react'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import './Sidebar.css'
import SignOut from './SignOut'

class Sidebar extends Component {
  render() {
    return (
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note" onClick={this.props.addNote}>
          <img src={newHover} alt="New note" />
          <img className="outline" src={newIcon} alt="New note" />
        </button>
        <SignOut signOut={this.props.signOut} />
      </nav>
    )
  }
}

export default Sidebar