import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ deleteNote, notes }) {
  return (
    <div className="note-item__content">
      <h2 className="label">Active Notes</h2>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              deleteNote={deleteNote}
              id={note.id}
              key={note.id}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Empty Note List</p>
      )}
    </div>
  );
}

export default NoteList;
