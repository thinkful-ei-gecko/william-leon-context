import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import FolderList from "./Components/FolderList";
import FolderDetailedView from "./Components/FolderDetailedView";
import NoteList from "./Components/NoteList";
import NoteDetailedView from "./Components/NoteDetailedView";
import NotFound from "./Components/NotFound";

/* <FolderDetailedView
  folder={this.state.store.folders.find(
    folder => folder.id === routeProps.match.params.folderId
  )}
  routeProps={routeProps}
  /> */

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store
    };
  }

  render() {
    // console.log(this.state.store);
    return (
      <div className="app">
        <Header />
        <Sidebar>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <FolderList
                  folders={this.state.store.folders}
                  routeProps={routeProps}
                />
              )}
            />
            <Route
              path="/folder/:folderId"
              render={routeProps => (
                <FolderList
                  folders={this.state.store.folders}
                  routeProps={routeProps}
                />
              )}
            />
            <Route
              path="/note/:noteId"
              render={routeProps => (
                <FolderDetailedView
                  folder={this.state.store.folders.find(
                    folder =>
                      folder.id ===
                      this.state.store.notes.find(
                        note => note.id === routeProps.match.params.noteId
                      ).folderId
                  )}
                  routeProps={routeProps}
                  onClickCancel={() => routeProps.history.goBack()}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Sidebar>
        <Main>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <NoteList
                  notes={this.state.store.notes}
                  routeProps={routeProps}
                />
              )}
            />
            <Route
              path="/note/:noteId"
              render={routeProps => (
                <NoteDetailedView
                  note={this.state.store.notes.find(
                    note => note.id === routeProps.match.params.noteId
                  )}
                  routeProps={routeProps}
                />
              )}
            />
            <Route
              path="/folder/:folderId"
              render={routeProps => (
                <NoteList
                  notes={this.state.store.notes.filter(
                    note => note.folderId === routeProps.match.params.folderId
                  )}
                  routeProps={routeProps}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </div>
    );
  }
}
