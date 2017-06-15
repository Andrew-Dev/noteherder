import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends React.Component {
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
                    <input type="text" name="title" placeholder="Title your note" value={this.props.note.title}  onChange={this.titleChange.bind(this)}/>
                </p>
                <p>
                    <textarea name="body" cols="50" rows="10" placeholder="Just start typing..." onChange={this.textChange.bind(this)} value={this.props.note.text}></textarea>
                </p>
                </form>
                <button class="button" onClick={this.deleteNote.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default NoteForm