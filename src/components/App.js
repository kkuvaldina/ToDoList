import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import uuid from "uuid";

class App extends React.Component {
  state = { tasks: [] };

  handleSubmit = newTask => {
    const tasks = [
      ...this.state.tasks,
      { text: newTask, id: `${uuid.v4()}`, taskCompleted: false }
    ];
    this.setState({ tasks });
  };

  handleDelete = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  handleComplete = id => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.taskCompleted = true;
        return task;
      }
      return task;
    });
    this.setState({ tasks });
  };

  getBadgeClasses() {
    let classes = "";

    if (this.state.taskCompleted === true) {
      classes = "check";
    }
    return classes;
  }

  getTextStyle() {
    let style = {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textSize: "1.7rem"
    };
    if (this.state.taskCompleted === true) {
      return style;
    }
    return (style = { textSize: "1.7rem" });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div className="ui center aligned container">
        <ToDoForm onFormSubmit={this.handleSubmit} />
        {this.state.tasks.map(task => (
          <ToDoItem
            task={task.text}
            key={task.id}
            id={task.id}
            onDelete={this.handleDelete}
            onComplete={this.handleComplete}
            getBadgeClasses={this.getBadgeClasses}
            getTextStyle={this.getTextStyle}
          />
        ))}
      </div>
    );
  }
}

export default App;
