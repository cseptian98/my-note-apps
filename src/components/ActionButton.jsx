import React from "react";

function ActionButton({ deleteNote, id }) {
  return (
    <div className="note-item__action">
      <button className="note-item__archive-button" type="submit">
        Archive
      </button>
      <button
        className="note-item__delete-button"
        onClick={() => deleteNote(id)}
        type="submit"
      >
        Delete
      </button>
    </div>
  );
}

export default ActionButton;
