import React from "react";
import { showFormattedDate } from "../utils";
import ActionButton from "./ActionButton";

function NoteItem({ body, createdAt, deleteNote, id, title }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <ActionButton id={id} deleteNote={deleteNote} />
    </div>
  );
}

export default NoteItem;
