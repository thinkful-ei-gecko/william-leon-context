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
import Context from './Components/Context';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Context.Provider value={{
           folders: this.state.store.folders,
           notes: this.state.store.notes
        }}>
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
                    routeProps={routeProps}
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
                    routeProps={routeProps}
                  />
                )}
              />
              <Route
                path="/folder/:folderId"
                render={routeProps => (
                  <NoteList
                    routeProps={routeProps}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Context.Provider>
      </div>
    );
  }
}
