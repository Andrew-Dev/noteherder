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
        console.log("add note clicked")
    }

    noteClicked(note) {
        console.log("individual note clicked",note)
    }

    render() {
        return (
            <main className="Main">
                <Sidebar addNote={this.addNote.bind(this)} />
                <NoteList notes={this.state.notes} selectNote={this.noteClicked.bind(this)} />
                <NoteForm/>
            </main>
        )
    }
    
}

export default Main