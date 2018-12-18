import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

  constructor(){
    super();
    this.state = {
        todos: []
    }
  }

  componentDidMount() {
      axios.get('/api/items')
        .then(response => this.setState({todos: response.data}))
  }

    render() {
    return (
      <ul>
        {this.state.todos.map((item) => <li>{item.name}</li>)}
      </ul>
    );
  }
}

export default App;
