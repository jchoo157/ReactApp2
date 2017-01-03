import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.porps.todos.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
    );
  }
}