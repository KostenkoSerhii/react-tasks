import React, { Component } from 'react';

import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';

import './app.sass';

export default class App extends Component{
  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {
        showRandomPlanet: !showRandomPlanet
      }
    })
  }

  render(){
    const { showRandomPlanet } = this.state;
    return (
      <div>
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}
  
        <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
  
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
