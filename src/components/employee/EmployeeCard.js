import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`${this.props.employee.imgLocation}`)} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
            <p>Title: {this.props.employee.title}</p>
            <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire!</button>

        </div>
      </div>
    );
  }
}

export default EmployeeCard;