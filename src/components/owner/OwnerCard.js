import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`${this.props.owner.imgLocation}`)} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
            <p>Animal: {this.props.owner.animal}</p>
            <p>Phone Number: {this.props.owner.phoneNumber}</p>
            <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>

            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;