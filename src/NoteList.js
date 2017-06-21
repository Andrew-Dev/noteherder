import React, { Component } from 'react'
import './NoteList.css'
import { NavLink, Router as BrowserRouter } from 'react-router-dom'
import NoteCell from './NoteCell'

class NoteList extends Component {

    renderNote(note,i) {
        console.log("renderNote props: ",this.props,this.context)
        return <NavLink to={`/notes/${note.id}`} key={i}><NoteCell note={note} noteClicked={this.props.selectNote} /></NavLink>
    }

    render() {
        return (
            <div className="NoteList">
                <h3>Notes</h3>
                <ul id="notes">
                    {this.props.notes.map(this.renderNote.bind(this))}
                </ul>
            </div>
        )
    }
}

export default NoteList