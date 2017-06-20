import React, { Component } from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'
import base, { auth } from './base'
import SignIn from './SignIn'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            currentNote: {
                title: '',
                text: '',
                id: Math.random().toString(36).substring(8),
            },
        }
    }

    signedIn = () => {
        return this.state.uid
    }

    signOut = () => {
        auth.signOut().then(() => {
            base.removeBinding(this.ref)
            this.setState({notes:[]})
            this.setState({currentNote: {
                title: '',
                text: '',
                id: Math.random().toString(36).substring(8),
            }})
        })
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
        auth.onAuthStateChanged((user) => {
            if(user) {
                this.authHandler(user)
            } else {
                this.setState({uid: null})
            }
        })
    }

    syncNotes = () => {
        this.ref = base.syncState(`${this.state.uid}/notes`,{
            context: this,
            state: 'notes',
            asArray: true,
        });
    }

    addNote(event) {
        const note = {
            id: Math.random().toString(36).substring(8),
            title: '',
            text: '',
        }
        this.setState({notes: [note,...this.state.notes], currentNote: note})
    }

    selectNote(note) {
        console.log("individual note clicked",note)
        this.setState({
            currentNote: note,
        });
    }

    updateNote(note) {
        let notes = this.state.notes
        let filtered = notes.filter(x => x.id === note.id)[0]
        if(!filtered) {
            this.setState({notes: [note,...this.state.notes], currentNote: note})
            return
        }
        console.log("update note",notes.indexOf(filtered),filtered)
        notes.splice(notes.indexOf(filtered),1)
        notes = [note,...notes]
        this.setState({
            currentNote: note,
            notes
        })
    }

    deleteNote(note) {
        let notes = this.state.notes
        let filtered = notes.filter(x => x.id === note.id)[0]
        notes.splice(notes.indexOf(filtered),1)
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
                <Sidebar addNote={this.addNote.bind(this)} signOut={this.signOut} />
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