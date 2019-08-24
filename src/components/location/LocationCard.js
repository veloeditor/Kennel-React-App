import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Location: <span className="card-locationname">{this.props.location.location}</span></h2>
            <p>Title: {this.props.location.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;