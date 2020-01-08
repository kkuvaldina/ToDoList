import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import uuid from "uuid";

class App extends React.Component {
  state = { tasks: [] };

  onTaskSubmit = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  handleDelete = task => {
    const tasks = this.state.tasks.filter(k => k !== task);

    this.setState({ tasks });
  };

  
  render() {
    return (
      <div className="ui center aligned container">
        <ToDoForm onFormSubmit={this.onTaskSubmit} />
        {this.state.tasks.map((task, index) => (
          <ToDoItem task={task} key={uuid.v4()} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default App;
