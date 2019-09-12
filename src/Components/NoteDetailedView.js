import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import noteAndFolderContext from './Context';
import { withRouter } from 'react-router-dom';

class NoteDetailedView extends Component {
    static contextType = noteAndFolderContext;

    render() {
        let note = this.context.notes.find(note => note.id === this.props.match.params.noteId);
        const { id, name, modified, folderId, content } = note;
        return (
            <div className="main__note-detailed-view" key={id}>
            <span>{name}</span>
            <span>{modified}</span>
            <Link to='/'>
                    <button type="button" onClick={() => this.context.deleteButton(note)}>Delete note</button>
            </Link>
            <p>{content}</p>
        </div>
        )
    }
}

export default withRouter(NoteDetailedView);