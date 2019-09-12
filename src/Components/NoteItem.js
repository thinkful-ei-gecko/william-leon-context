import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import noteAndFolderContext from './Context'

export default class NoteItem extends Component {
    static contextType = noteAndFolderContext;
    render() {
        // console.log(this.props.routeProps);
      const { id, name, modified, folderId, content } = this.props.note;
        return (
            <div className="main__note-item" key={id}>
                <Link to={`/note/${id}`}>
                    <p>{name}</p>
                </Link>
                <p>{modified}</p>
                <button type="button" onClick={() => this.context.deleteButton(this.props.note)}>Delete note</button>
            </div>
        )
    }
}