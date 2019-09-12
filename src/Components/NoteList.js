import React, { Component } from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends Component {
    render() {
        const noteItems = this.props.notes.map(note => <NoteItem note={note} />)
        return (
            <li className="main__note-list">
               {noteItems}
            </li>
        )
    }
}