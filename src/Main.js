import React, { Component } from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            currentNote: {
                title: '',
                text: '',
                id: '',
            },
        }
    }

    addNote(event) {
        event.preventDefault()
        const note = {
            id: Math.random().toString(36).substring(8),
            title: 'New note',
            text: '',
        }
        this.setState({notes: [note,...this.state.notes]})
    }

    noteClicked(note) {
        console.log("individual note clicked",note)
        this.setState({
            currentNote: note,
        });
    }

    updateNote(note) {
        let notes = this.state.notes
        console.log("update note",notes.indexOf(note),note)
        notes.splice(notes.indexOf(note),1)
        notes = [note,...notes]
        this.setState({
            currentNote: note,
            notes
        })
    }

    deleteNote(note) {
        let notes = this.state.notes
        notes.splice(notes.indexOf(note),1)
        this.setState({
            currentNote: {
                title: '',
                text: '',
                id: '',
            },
            notes
        })
    }

    render() {
        return (
            <main className="Main">
                <Sidebar addNote={this.addNote.bind(this)} />
                <NoteList notes={this.state.notes} selectNote={this.noteClicked.bind(this)} />
                <NoteForm note={this.state.currentNote} updateNote={this.updateNote.bind(this)} deleteNote={this.deleteNote.bind(this)} />
            </main>
        )
    }
    
}

export default Main