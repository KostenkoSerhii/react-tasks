import React, { Component } from 'react';

import Header from 'components/header';
import ErrorIndicator from 'components/error-indicator';
import Row from 'components/row';
import ErrorBoundry from 'components/error-boundry';
import ItemDetails, { Record } from 'components/item-details';

import SwapiService from 'services/swapi-services';

import './app.sass';
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from 'components/sw-components';
import PeoplePage from 'components/people-page';

export default class App extends Component{
  
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }
  
  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {
        showRandomPlanet: !showRandomPlanet
      }
    })
  }

  render(){
    const { showRandomPlanet, hasError } = this.state;

    if(hasError) return <ErrorIndicator/>


    return (      
        <div className="app">
          <Header />
            <ErrorBoundry>
          <PeoplePage/>
          <PersonDetails itemId={3}/>
          <PlanetDetails itemId={4}/>
          <StarshipDetails itemId={5}/>
          <PersonList >
            { i => `${i.name} (${i.birthYear})`}
          </PersonList>
          <PlanetList >
            { i => `${i.name} `}
          </PlanetList>
          <StarshipList >
            { i => `${i.name}`}
          </StarshipList>
              <Row
                left={<PersonDetails itemId={3}/>}
                right={<StarshipDetails itemId={5}/>}
              />
            </ErrorBoundry>
        </div>
    );
  }
}
