import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import './../style/taskForm.scss';
// what up
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      name : '',
      status : false
    }
  }

  onSave = (e) => {
    e.preventDefault();
    this.props.onSaveTask(this.state);
  }
  
  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
    if (this.state.name) {
      this.refs.btnSave.removeAttribute("disabled");
    }
  }

  render() {
    return (
      <div className="form-horizontal">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Task Form</h3>
          </div>
          <div className="panel-body form-content">
              <form onSubmit={this.onSave}>
                <div className="form-group">
                  <label>Add task name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    value={this.state.name} 
                    onChange={this.onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Choose status of task</label>
                  <select 
                    name="status"
                    className="form-control"
                    value={this.state.status}
                    onChange={this.onHandleChange}
                  >
                    <option value={true}>Completed</option>
                    <option value={false}>UnCompleted</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <button 
                      disabled 
                      ref="btnSave" 
                      type="submit"
                      className="btn btn-primary" 
                    >
                      Save <i className="fas fa-save"></i>
                    </button>
                    <button type="button" className="btn btn-danger ml">Remove <i className="fas fa-times-circle"></i></button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveTask : (task) => {
      dispatch(actions.addTask(task))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
