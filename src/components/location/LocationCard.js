import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Location.css';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`${this.props.location.imgLocation}`)} alt="My Dog" />
          </picture>
          <h2>Location: <span className="card-locationname">{this.props.location.location}</span></h2>
            <p>Address: {this.props.location.address}</p>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>

            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;