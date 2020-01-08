import React from "react";

class ToDoItem extends React.Component {
  state = { taskCompleted: false };

  render() {
    return (
      <div
        className="ui raised left aligned clearing segment"
        onClick={() => this.onComplete(this.props.task)}
      >
        <i className={this.getBadgeClasses()} />
        <span style={this.getTextStyle()}>{this.props.task}</span>
        <button
          className="ui right floated button"
          onClick={() => this.props.onDelete(this.props.task)}
        >
          Delete
        </button>
      </div>
    );
  }

  getTextStyle() {
    let style = {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      fontSize: "1.7rem"
    };
    if (this.state.taskCompleted === true) {
      return style;
    }
    return (style = { fontSize: "1.7rem" });
  }

  onComplete() {
    if (this.state.taskCompleted === true) {
      return this.setState({ taskCompleted: false });
    }
    return this.setState({ taskCompleted: true });
  }

  getBadgeClasses() {
    let classes = "big circle outline icon";

    if (this.state.taskCompleted === true) {
      classes += " check";
    }
    return classes;
  }
}

export default ToDoItem;
