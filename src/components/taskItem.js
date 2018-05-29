import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskItem extends Component {
  
  onUpdateStatus = () => {
    this.props.updateStatus(this.props.task.id);
  }
  onDeleteTask = () => {
    let result = window.confirm('Do you wanna delete this task');
    if(result) {
      this.props.deleteTask(this.props.task.id);
    } else {
      return false;
    }
  }

  render() {
    return (
      <tr>
        <td>{ this.props.order }</td>
        <td>{ this.props.task.name }</td>
        <td>
          <span 
            className="label label-info"
            className={ this.props.task.status === true ? "label label-info" : "label label-danger" }
            onClick={ this.onUpdateStatus.bind(this.props.task.id) }
          >
            { this.props.task.status === true ? "Completed" : "UnCompleted" }
          </span>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-success"
          >Edit <i className="fas fa-edit"></i>
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={ this.onDeleteTask.bind(this.props.task.id) }
          >Delete <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStatus : (taskId) => {
      dispatch(actions.updateStatusTask(taskId))
    },
    deleteTask : (taskId) => {
      dispatch(actions.deleteTask(taskId))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);