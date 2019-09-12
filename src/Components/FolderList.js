import React, { Component } from 'react';
import FolderItem from './FolderItem'
import noteAndFolderContext from './Context'

export default class FolderList extends Component {
  static contextType = noteAndFolderContext;
  render() {
    const folderItems = this.context.folders.map(folder =>
      <FolderItem
        folder={folder}
        routeProps={this.props.routeProps}
      />);
    return (
      <li className="sidebar__folder-list">
        {folderItems}
      </li>
    )
  }
}