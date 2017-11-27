import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({tasks: [this.state.text, ...this.state.tasks]});
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className="todo" type="text"></input>
          <button type="submit">Add Task</button>
        </form>

        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
