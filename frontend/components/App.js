import React from 'react'
import Form from './Form'
import Todolist from './Todolist'

let id = 0 
let getId = () => id++

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn react", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  toggleCompletion = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    }));
  }

  addTodo = (name) => {
    this.setState((prevState) => ({
      todos: prevState.todos.concat({id: getId(), completed: false, name})
    }))
  }
  
  render() {
    return (
      <div>
        <Todolist todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
