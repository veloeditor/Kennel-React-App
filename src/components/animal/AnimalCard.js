import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Animal.css'


class AnimalCard extends Component {
  render() {
    console.log("props.animal.imgLocation", this.props.animal.imgLocation)
    return (
      <div className="card">
        <div className="card-content">
          {this.props.animal.imgLocation === undefined || this.props.animal.imgLocation === ""
         ?<picture>
         <img src={require('./dog.svg')} alt="My Dog" />
         </picture>  
         :<picture>
         <img src={require(`${this.props.animal.imgLocation}`)} alt="My Dog" />
         </picture>  }
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;

