import React from "react";
import NoteItem from "./NoteItem";

function Archive({ archives }) {
  return (
    <div className="note-item__content">
      <h2 className="label">Archive</h2>
      {archives.length !== 0 ? (
        <div className="notes-list">
          {archives.map(
            (archive) =>
              archive.archived === true && (
                <NoteItem id={archive.id} key={archive.id} {...archive} />
              )
          )}
        </div>
      ) : (
        <p className="notes-list__empty-message">Archived Note is Empty</p>
      )}
    </div>
  );
}

export default Archive;
