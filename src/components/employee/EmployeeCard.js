import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
            <p>Title: {this.props.employee.title}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;