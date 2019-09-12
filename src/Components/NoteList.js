import React, { Component } from 'react';
import NoteItem from './NoteItem';
import noteAndFolderContext from './Context'

function showFolders(contextNotes, specificFolder, routeProps) {
    let folders = contextNotes
    if (specificFolder) { //check if there is a specific folder we should filter with
        folders = folders.filter(note => note.folderId === specificFolder);
    } 
    folders = folders.map(note => <NoteItem note={note} routeProps={routeProps} />)
    return folders;
}

export default class NoteList extends Component {
    static contextType = noteAndFolderContext;
    render() {
        let contextNotes = this.context.notes;
        let specificFolder = this.props.routeProps.match.params.folderId;
        return (
            <li className="main__note-list">
                {showFolders(contextNotes, specificFolder, this.props.routeProps )}
            </li>
        )
    }
}