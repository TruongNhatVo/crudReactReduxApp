import * as actions from './../actions/index';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class SearchTask extends Component {
  
  onSearch = (e) => {
    this.props.onSearchTask(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <input 
            type="text" 
            name="searchTask" 
            onChange={this.onSearch} 
            className="form-control" 
            placeholder="Search task ..."
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskItem : state.task
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTask : (keyword) => {
      dispatch(actions.search(keyword))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchTask);
