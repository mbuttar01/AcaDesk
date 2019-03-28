import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px', fontFamily: 'montserrat' }}
          placeholder="Enter Student Name...." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={btnSubmit}
        />
      </form>
    )
  }
}

// Styles
const btnSubmit = {
  fontFamily: 'montserrat',
  background: '#fff',
  color: '#e8491d',
  padding: '10px 20px',
  cursor: 'pointer',
  float: 'right',
  border: '1px #e8491d solid'
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
