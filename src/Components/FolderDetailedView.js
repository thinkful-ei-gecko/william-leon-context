import React, { Component } from 'react';

export default class FolderDetailedView extends Component {
  render() {
    const { id, name } = this.props.folder;
    return (
      <div className='sidebar__folder-detailed-view' key={id}>
        <button type="button" onClick={this.props.onClickCancel}>Go back</button>
        <h2>{name}</h2>
      </div>
    )
  }
}