import { Route, Redirect } from "react-router-dom"
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
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  
  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
     
        <Route path="/animals" render={props => {
            if (this.isAuthenticated()) {
                return <AnimalList {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
         <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
         <Route path="/animals/:animalId(\d+)" render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
         <Route exact path="/location" render={(props) => {
           if (this.isAuthenticated()) {
             return <LocationList {...props} />
           } else {
             return <Redirect to="/login" />
           }
          
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the animalId to the LocationDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
        <Route path="/location/new" render={(props) => {
        return <LocationForm {...props} />
        }} />
        <Route path="/employee/new" render={(props) => {
        return <EmployeeForm {...props} />
        }} />
         <Route exact path="/employee" render={(props) => {
           if (this.isAuthenticated()) {
             return <EmployeeList {...props} />
           } else {
             return <Redirect to="/login" />
           }
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/> 
        }} />
         <Route exact path="/owner" render={(props) => {
           if (this.isAuthenticated()) {
             return <OwnerList {...props} />
           } else {
            return <Redirect to="/login" />
           }
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the ownerId to the OwnerDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
        }} />
        <Route path="/owner/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews