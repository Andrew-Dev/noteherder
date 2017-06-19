import React, { Component } from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'
import base, { auth } from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

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

    signedIn = () => {
        return this.state.uid
    }

    signOut = () => {
        auth.signOut().then(this.setState({
            uid: null
        }))
    }

    authHandler = (user) => {
        this.setState({uid: user.uid},this.syncNotes)
    }

    notesArr() {
        let arr = []
        Object.keys(this.state.notes).map((key) => {
            arr.push(this.state.notes[key])
        })
        return arr
    }

    componentWillMount() {
        
    }

    syncNotes = () => {
        base.syncState(`${this.state.uid}/notes`,{
            context: this,
            state: 'notes',
            asArray: true,
        });
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

    selectNote(note) {
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

    renderMain() {
        return (
            <main className="Main">
                <SignOut signOut={this.signOut} />
                <Sidebar addNote={this.addNote.bind(this)} />
                <NoteList notes={this.state.notes} selectNote={this.selectNote.bind(this)} />
                <NoteForm note={this.state.currentNote} updateNote={this.updateNote.bind(this)} deleteNote={this.deleteNote.bind(this)} />
            </main>
        )
    }

    render() {
        return (
            <div className="App">
                {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/>}
            </div>
            
        )
    }
    
}

export default Main