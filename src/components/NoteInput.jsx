import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const limit = 50;
    const char_limit = limit - this.state.title.length;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="label">Buat Catatan</h2>
        <h3 className="note-input__title__char-limit">
          Sisa Karakter: {char_limit}
        </h3>
        <input
          className="note-input__title"
          onChange={this.onTitleChangeEventHandler}
          placeholder="Tuliskan judul disini..."
          type="text"
          value={this.state.title}
        />
        <input
          className="note-input__body"
          onChange={this.onBodyChangeEventHandler}
          placeholder="Tuliskan catatanmu disini..."
          type="textarea"
          value={this.state.body}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteInput;
