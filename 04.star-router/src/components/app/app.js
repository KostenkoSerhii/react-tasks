import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/header';
import ErrorIndicator from 'components/error-indicator';
import ErrorBoundry from 'components/error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from 'components/pages';
import RandomPlanet from 'components/random-planet';

import SwapiService from 'services/swapi-services';
import DummySwapiService from 'services/dummy-swapi-service';
import { SwapiServiceProvider } from 'components/swapi-service-context';

import './app.sass';

import { StarshipDetails } from 'components/sw-components';

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
          <Router>
            <div className="app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet/>

              <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>  }/>
              <Route path="/people" component={PeoplePage}/>
              <Route path="/planets" component={PlanetsPage}/>
              <Route path="/starships" exact component={StarshipsPage}/>
              <Route path="/starships/:id" 
              render={({match}) => {
                console.log(match)
                return <StarshipDetails itemId={match.params.id} />
              }}/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
