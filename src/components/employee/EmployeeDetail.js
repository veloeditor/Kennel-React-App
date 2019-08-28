import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        title: employee.title,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employee"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Title: {this.state.title}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;