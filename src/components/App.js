import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import uuid from "uuid";

class App extends React.Component {
  state = { tasks: [] };

  handleSubmit = newTask => {
    const tasks = [
      { text: newTask, id: `${uuid.v4()}`, taskCompleted: false },
      ...this.state.tasks
    ];
    tasks.sort((a, b) => a.taskCompleted - b.taskCompleted);
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  componentDidMount() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      this.setState({ tasks: storedTasks });
    }
  }

  handleDelete = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    tasks.sort((a, b) => a.taskCompleted - b.taskCompleted);
    this.setState({ tasks });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleComplete = id => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.taskCompleted = !task.taskCompleted;
        return task;
      }
      return task;
    });

    tasks.sort((a, b) => a.taskCompleted - b.taskCompleted);
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="ui center aligned container">
        <ToDoForm onFormSubmit={this.handleSubmit} />
        {this.state.tasks.map(task => (
          <ToDoItem
            task={task}
            key={task.id}
            onDelete={this.handleDelete}
            onComplete={this.handleComplete}
          />
        ))}
      </div>
    );
  }
}

export default App;
