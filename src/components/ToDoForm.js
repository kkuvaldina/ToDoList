import React from "react";

class ToDoForm extends React.Component {
  state = { task: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.task);
    this.setState({ task: "" });
  };

  onInputChange = event => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.onFormSubmit} className="ui form ">
          <div className="ui fluid input">
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.task}
              onChange={this.onInputChange}
            />
            <button className="ui right floated primary button m-2">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
