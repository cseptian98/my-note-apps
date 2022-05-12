import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTitle: "",
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
    this.props.searchNote(event.target.value);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Note App</h1>
        <input
          className="note-input__title"
          placeholder="Search Note..."
          type="text"
          value={this.state.searchTitle}
          onChange={this.onChangeEventHandler}
        />
      </div>
    );
  }
}

export default Header;
