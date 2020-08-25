import React, { Component } from 'react';

import Header from 'components/header';
import ErrorIndicator from 'components/error-indicator';
import Row from 'components/row';
import ErrorBoundry from 'components/error-boundry';
import ItemDetails, { Record } from 'components/item-details';

import SwapiService from 'services/swapi-services';

import './app.sass';
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
    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
        >
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );

    const starhipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
          <Record field="model" label="Model"/>
          <Record field="length" label="Length"/>
          <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    );

    return (

      
        <div className="app">
          <Header />
            <ErrorBoundry>
              <PeoplePage/>
              <Row
                left={personDetails}
                right={starhipDetails}
              />
            </ErrorBoundry>
        </div>
    

    );
  }
}
