import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FolderItem extends Component {
  render() {    
    return (
      <div className="folder-item" >
        <Link to={`/folder/${this.props.folder.id}`}>
          {(this.props.routeProps.location.pathname.slice(8) === this.props.folder.id) && <button type="button" className="folder__button--active">{this.props.folder.name}</button>}
          {(this.props.routeProps.location.pathname.slice(8) !== this.props.folder.id) && <button type="button" >{this.props.folder.name}</button>}
        </Link>
      </div>
    )
  }
}