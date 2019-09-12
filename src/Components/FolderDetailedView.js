import React, { Component } from 'react';
import Context from './Context';
import { withRouter } from 'react-router-dom';

class FolderDetailedView extends Component {
  static contextType = Context;
  render() {
    let folder = this.context.folders.find(
      folder => folder.id === this.context.notes.find(
      note => note.id === this.props.match.params.noteId).folderId
    )
    const { id, name } = folder;
    // console.log(this.props)
    return (
      <div className='sidebar__folder-detailed-view' key={id}>
        <button type="button" onClick={() => this.props.history.goBack()}>Go back</button>
        <h2>{name}</h2>
      </div>
    )
  }
}

export default withRouter(FolderDetailedView);