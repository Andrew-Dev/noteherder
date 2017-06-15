import React, { Component } from 'react'

class NoteCell extends Component {

    cellClick(event) {
        event.preventDefault()
        console.log("cell click",this.props);
        this.props.noteClicked(this.props.note)
    }

    render() {
        return (
            <li>
                <div onClick={this.cellClick.bind(this)}>
                    <div className="note">
                    <div className="note-title">
                        {this.props.note.title}
                    </div>
                    <div className="note-body">
                        <p>
                            {this.props.note.text}
                        </p>
                    </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default NoteCell