import React, { Component } from 'react'
import './NoteForm.css'
import { NavLink, Router as BrowserRouter } from 'react-router-dom'

class NoteForm extends React.Component {

    state = {
        note: {
            title: '',
        }
    }

    constructor(props) {
        super(props)

        this.textChange = this.textChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.deleteNote = this.deleteNote.bind(this);    
    }

    componentWillMount() {
        //wait for note to load so it doesn't crash
        setTimeout(() => {
            if(this.props.id) {
                const note = this.props.getNote(this.props.id)
                console.log("props id is true", note)
                this.setState({ note })
                return
            }
        },1000)
        
    }

    componentWillReceiveProps(nextProps) {
        console.log("props id: ",this.props.id)

       
        console.log("new props")
        this.setState({ note: nextProps.note })
    }

    textChange(event) {
        event.preventDefault()
        console.log(event.target)
        this.state.note.text = event.target.value
        console.log("text change",event.target.value)
        this.props.updateNote(this.state.note)
    }

    titleChange(event) {
        event.preventDefault()
        this.state.note.title = event.target.value
        this.props.updateNote(this.state.note)
    }
    
    deleteNote(event) {
        //event.preventDefault()
        this.props.deleteNote(this.state.note)
    }

    render() {
        return (
            <div className="NoteForm">
                <form>
                <p>
                    <input type="text" name="title" placeholder="Title your note" value={this.state.note.title}  onChange={this.titleChange}/>
                </p>
                <p>
                    <textarea name="body" placeholder="Just start typing..." onChange={this.textChange} value={this.state.note.text}></textarea>
                </p>
                </form>
                <NavLink to={`/notes`}><button className="button" onClick={this.deleteNote}><i className="fa fa-trash-o"/></button></NavLink>
            </div>
        )
    }
}

export default NoteForm