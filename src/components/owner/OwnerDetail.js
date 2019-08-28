import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        animal: owner.animal,
        phoneNumber: owner.phoneNumber,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owner"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Animal: {this.state.animal}</p>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;