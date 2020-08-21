import React, { Component } from 'react';

import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ErrorButton from 'components/error-button';
import ErrorIndicator from 'components/error-indicator';
import PeoplePage from 'components/people-page';

import './app.sass';

export default class App extends Component{
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
      <div>
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}
  
          <div className="btns-wrap">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton/>
          </div>
          <PeoplePage/>
      </div>
    );
  }
}
