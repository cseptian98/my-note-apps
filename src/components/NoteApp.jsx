import React from "react";
import { getInitialData } from "../utils";
import Archive from "./Archive";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ body, title }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            body,
            createdAt: +new Date(),
            title,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchNoteHandler(title) {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <Header searchNote={this.onSearchNoteHandler} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteList
          deleteNote={this.onDeleteNoteHandler}
          notes={this.state.notes}
        />
        <Archive archives={this.state.notes} />
      </>
    );
  }
}

export default NoteApp;
