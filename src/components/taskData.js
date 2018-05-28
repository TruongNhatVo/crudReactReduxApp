import React, { Component } from 'react';
import './../style/taskData.scss'
// what up
class TaskData extends Component {
  render() {
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
            <tr>
              <td>1</td>
              <td>Học angular</td>
              <td>
                <span className="label label-info">Completed</span>
              </td>
              <td>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskData;
