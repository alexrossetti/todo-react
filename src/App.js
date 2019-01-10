import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, clearTodos } from './actions';
import moment from 'moment';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      deadline: ''
    }
  }

  addTodo(){
    this.props.addTodo(this.state.text, this.state.deadline);
  }

  deleteTodo(id){
    this.props.deleteTodo(id);
  }

  renderTodos() {
    const { todos } = this.props;

    return (
      <ul className="todos-list">
        { 
          todos.map(todo => {
            return (
              <li key={todo.id}>
                <div className="todos-list-text">{todo.text}</div>
                <div> { moment(new Date(todo.deadline)).fromNow()} </div>
                <div className="delete-btn" onClick={(e) => this.deleteTodo(todo.id)}>&#x2715;</div>
              </li>
            )
          }) 
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        
        <div className="title">ToDo...</div>

        <form>
          <input 
            type="datetime-local"
            onChange={(e) => this.setState({deadline: e.target.value})}
          />
          <input 
            className="todo-input"
            placeholder="Create ToDo..."
            onChange={(e) => this.setState({text: e.target.value})}
          />
          <button type="button" className="add-btn" onClick={(e) => this.addTodo()}>Add ToDo</button>
          { this.renderTodos() }
          
        </form>
        <button type="button" className="clear-btn" onClick={(e) => this.props.clearTodos()}>Clear All</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo, clearTodos })(App);
