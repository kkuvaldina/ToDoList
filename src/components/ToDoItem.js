import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div
        className="ui raised left aligned clearing segment"
        onClick={() => this.props.onComplete(this.props.id)}
      >
        <i
          className={`big circle outline icon ${() =>
            this.props.getBadgeClasses()}`}
        />
        <span /*style={() => this.props.getTextStyle()}*/>
          {this.props.task}
        </span>
        <button
          className="ui right floated button"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ToDoItem;
