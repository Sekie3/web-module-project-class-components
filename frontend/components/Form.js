import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({
      ...this.state,
      name: '',
    })
  }

  onChange = e => {
    const { value } = e.target
    this.setState({
      ...this.state,
      name: value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.name} onChange={this.onChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
