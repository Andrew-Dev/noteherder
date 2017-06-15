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
            title: 'Test note',
            text: 'This is a test',
        }
        this.setState({notes: [...this.state.notes,note]})
    }

    noteClicked(note) {
        console.log("individual note clicked",note)
        this.setState({
            currentNote: note,
        });
    }

    updateNote(note) {
        this.setState({
            currentNote: note,
        })
    }

    render() {
        return (
            <main className="Main">
                <Sidebar addNote={this.addNote.bind(this)} />
                <NoteList notes={this.state.notes} selectNote={this.noteClicked.bind(this)} />
                <NoteForm note={this.state.currentNote} updateNote={this.updateNote.bind(this)} />
            </main>
        )
    }
    
}

export default Main