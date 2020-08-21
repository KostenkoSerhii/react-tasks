import React, { Component } from 'react';

import Spinner from 'components/spinner';

import ErrorButton from 'components/error-button';
import SwapiService from 'services/swapi-services';

import './person-details.sass';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = { 
    person: null,
    loading: false
  }

  updatePerson(){
    const { personId } = this.props;

    if(!personId) return;

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        console.log(`after`, this.state.loading)
        this.setState({ 
          person,
          loading: false
        })
      })
      .catch(e => {console.log(`error`, e)})
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.setState({
        loading: true
      })
      console.log(`before`, this.state.loading) // не совсем понятно почему когда в первый раз кликаю на персонажа то не появляется спиннер
      this.updatePerson();
     
    }
  }

  render() {

    if(!this.state.person){
      return <span>Select person from list </span>
    };
    
    if(this.state.loading){
      return <Spinner/>
    };

    const { person: {id, name, gender, birthYear, eyeColor }} = this.state;
    return (
      <div className="person-details card">

        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        <ErrorButton/>
        </div>
      </div>
    )
  }
}

