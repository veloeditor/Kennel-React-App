import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}/>

        }} />
         <Route exact path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the animalId to the LocationDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
        }} />
         <Route exact path="/employee" render={(props) => {
        return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}/>
        }} />
         <Route exact path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the ownerId to the OwnerDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews