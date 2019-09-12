import React, { Component } from 'react';
import Context from './Context';

export default class FolderDetailedView extends Component {
  static contextType = Context;
  render() {
    let folder = this.context.folders.find(
      folder => folder.id === this.context.notes.find(
      note => note.id === this.props.routeProps.match.params.noteId).folderId
    )
    const { id, name } = folder;
    return (
      <div className='sidebar__folder-detailed-view' key={id}>
        <button type="button" onClick={() => this.props.routeProps.history.goBack()}>Go back</button>
        <h2>{name}</h2>
      </div>
    )
  }
}