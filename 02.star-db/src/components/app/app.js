import React, { Component } from 'react';

import Header from 'components/header';
import ErrorIndicator from 'components/error-indicator';
import Row from 'components/row';
import ErrorBoundry from 'components/error-boundry';
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from 'components/sw-components';
import PeoplePage from 'components/people-page';
import RandomPlanet from 'components/random-planet';

import { SwapiServiceProvider } from 'components/swapi-service-context';

import SwapiService from 'services/swapi-services';

import './app.sass';

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
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}> 
          <div className="app">
            <Header />
            <PeoplePage/>
            <PersonDetails itemId={3}/>
            <PlanetDetails itemId={4}/>
            <StarshipDetails itemId={5}/>
            <PersonList />
            <PlanetList />
            <StarshipList />
            <Row
              left={<PersonDetails itemId={3}/>}
              right={<StarshipDetails itemId={5}/>}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
