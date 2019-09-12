import React, { Component } from 'react';
import NoteItem from './NoteItem';
import noteAndFolderContext from './Context';
import { withRouter } from 'react-router-dom';

function showFolders(contextNotes, specificFolder) {
    let folders = contextNotes
    if (specificFolder) { //check if there is a specific folder we should filter with
        folders = folders.filter(note => note.folderId === specificFolder);
    } 
    folders = folders.map(note => <NoteItem note={note} />)
    return folders;
}

class NoteList extends Component {
    static contextType = noteAndFolderContext;
    render() {
        let contextNotes = this.context.notes;
        let specificFolder = this.props.match.params.folderId;
        return (
            <li className="main__note-list">
                {showFolders(contextNotes, specificFolder)}
            </li>
        )
    }
}

export default withRouter(NoteList)