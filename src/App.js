import React, { Component } from 'react';
import TaskForm from './components/taskForm';
import TaskData from './components/taskData';
import SearchTask from './components/searchTask';
import './App.scss';
// what up
class App extends Component {
  render() {
    return (
      <div id="App-container" className="container">
      	<div className="col-xs-12">
      		<h1 className="text-center">SIMPLE CRUD REACTJS, REDUX</h1>
      	</div>
      	<div className="col-xs-12 col-sm-4">
      		<TaskForm></TaskForm>
      	</div>
      	<div className="col-xs-12 col-sm-8">
          <SearchTask></SearchTask>
      		<TaskData></TaskData>
      	</div>
      </div>
    );
  }
}

export default App;
