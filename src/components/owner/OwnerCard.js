import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
            <p>Animal: {this.props.owner.animal}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;