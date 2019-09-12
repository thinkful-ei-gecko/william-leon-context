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
      store: {folders: [], notes: []}
    };
  }

  getAPI = () => {
    let folders = [];
    let notes = [];
    fetch('http://localhost:9090/folders')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(responseJson => {
        // console.log(responseJson);
        folders = responseJson;
        return fetch('http://localhost:9090/notes')
      })
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then(responseJson => {
          notes = responseJson;
          this.setState({
            store: {folders, notes: responseJson}
          })
        })
        .catch(err => {
          throw new Error(`Err: ${err.message}`);
        })
  }

  componentDidMount() {
    this.getAPI();
  }

  deleteButton = (note) => {
    console.log('delete called');
    console.log(note);
    fetch(`http://localhost:9090/notes/${note.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error ('something went wrong~ @@@!!!@!@@#');
    })
    .then (resJson => { this.getAPI() })
    .catch(e=> `Your error is ${e}`);

    }


  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <Header />
        <Context.Provider value={{
           folders: this.state.store.folders,
           notes: this.state.store.notes,
           deleteButton: this.deleteButton
        }}>
          <Sidebar>
            <Switch>
              <Route
                exact
                path="/"
                component={FolderList}
              />
              <Route
                path="/folder/:folderId"
                component={FolderList}
              />
              <Route
                path="/note/:noteId"
                component={FolderDetailedView}
              />
              <Route component={NotFound} />
            </Switch>
          </Sidebar>
          <Main>
            <Switch>
              <Route
                exact
                path="/"
                component={NoteList}
              />
              <Route
                path="/note/:noteId"
                component={NoteDetailedView}
              />
              <Route
                path="/folder/:folderId"
                component={NoteList}
              />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Context.Provider>
      </div>
    );
  }
}
