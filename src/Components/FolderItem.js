import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class FolderItem extends Component {
  render() {    
    return (
      <div className="folder-item" >
        <Link to={`/folder/${this.props.folder.id}`}>
          {(this.props.location.pathname.slice(8) === this.props.folder.id) && <button type="button" className="folder__button--active">{this.props.folder.name}</button>}
          {(this.props.location.pathname.slice(8) !== this.props.folder.id) && <button type="button" >{this.props.folder.name}</button>}
        </Link>
      </div>
    )
  }
}

export default withRouter(FolderItem);