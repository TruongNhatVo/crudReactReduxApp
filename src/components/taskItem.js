import React, { Component } from 'react';

class TaskItem extends Component {

  render() {
    return (
      <tr>
        <td>{ this.props.order }</td>
        <td>{ this.props.name }</td>
        <td>
          <span 
            className="label label-info"
            className={ this.props.status === true ? "label label-info" : "label label-danger" }
          >
            { this.props.status === true ? "Completed" : "UnCompleted" }
          </span>
        </td>
        <td>
          <button type="button" className="btn btn-success">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
