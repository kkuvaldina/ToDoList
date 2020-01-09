import React from "react";

class ToDoItem extends React.Component {
  getBadgeClasses = () => this.props.task.taskCompleted ? "check" : "";

  getTextStyle = () => {
    let style = {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      fontSize: "1.7rem"
    };
    if (this.props.task.taskCompleted === true) {
      return style;
    }
    return { fontSize: "1.7rem" };
  }

  render() {
    const task = this.props.task;
    return (
      <div
        className="ui raised left aligned clearing segment"
        onClick={() => this.props.onComplete(task.id)}
      >
        <i
          className={`big circle outline icon ${this.getBadgeClasses()}`}
        />
        <span style={this.getTextStyle()}>
          {task.text}
        </span>
        <button
          className="ui right floated button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.onDelete(task.id)
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ToDoItem;
