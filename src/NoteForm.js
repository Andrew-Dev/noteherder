import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends React.Component {

    constructor(props) {
        super(props)

        this.textChange = this.textChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.deleteNote = this.deleteNote.bind(this);    
    }

    textChange(event) {
        event.preventDefault()
        console.log(event.target)
        this.props.note.text = event.target.value
        console.log("text change",event.target.value)
        this.props.updateNote(this.props.note)
    }

    titleChange(event) {
        event.preventDefault()
        this.props.note.title = event.target.value
        this.props.updateNote(this.props.note)
    }
    
    deleteNote(event) {
        event.preventDefault()
        this.props.deleteNote(this.props.note)
    }

    render() {
        return (
            <div className="NoteForm">
                <form>
                <p>
                    <input type="text" name="title" placeholder="Title your note" value={this.props.note.title}  onChange={this.titleChange}/>
                </p>
                <p>
                    <textarea name="body" placeholder="Just start typing..." onChange={this.textChange} value={this.props.note.text}></textarea>
                </p>
                </form>
                <button className="button" onClick={this.deleteNote}><i className="fa fa-trash-o"/></button>
            </div>
        )
    }
}

export default NoteForm