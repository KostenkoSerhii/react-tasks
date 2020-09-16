import React, { Component } from 'react';

import Header from 'components/header';
import ErrorIndicator from 'components/error-indicator';
import ErrorBoundry from 'components/error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from 'components/pages';
import RandomPlanet from 'components/random-planet';

import SwapiService from 'services/swapi-services';
import DummySwapiService from 'services/dummy-swapi-service';
import { SwapiServiceProvider } from 'components/swapi-service-context';

import './app.sass';

export default class App extends Component{
  
  state = {
    hasError: false,
    swapiService: new SwapiService()
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => { 
      const Service = swapiService instanceof SwapiService ? 
                        DummySwapiService : SwapiService;
      return { 
        swapiService:  new Service()
     }
    })
  }

  render(){
    const { hasError } = this.state;

    if(hasError) return <ErrorIndicator/>

    return (     
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}> 
          <div className="app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet/>

            <PeoplePage/>
            <PlanetsPage/>
            <StarshipsPage/>
            
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
