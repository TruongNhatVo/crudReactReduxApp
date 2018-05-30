import React, { Component } from 'react';
import {connect} from 'react-redux';
import TaskItem from './taskItem';
import './../style/taskData.scss';

class TaskData extends Component {

  render() {
    var task = this.props.taskItem;
    var keyword = this.props.keyword;
    task = task.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
    })

    var elmTasks = task.map((task, index) => {
      return (
        <TaskItem
            key={index}
            task={task}
            order={index + 1}
        />
      )
    });
    
    return (
      <div className="table-responsive task-data">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Order</th>
              <th>Task name</th>
              <th>Task status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { elmTasks }
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    taskItem : state.task,
    keyword : state.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskData);
