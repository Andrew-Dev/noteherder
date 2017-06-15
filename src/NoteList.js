import React, { Component } from 'react'
import './NoteList.css'
import NoteCell from './NoteCell'

class NoteList extends Component {

    renderNote(note,i) {
        return <NoteCell note={note} noteClicked={this.props.selectNote} key={i} />
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