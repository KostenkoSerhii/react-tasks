import React, { Component } from 'react';

import swapiService from '../../services/swapi-services';
import './random-planet.sass';

export default class RandomPlanet extends Component {
  
  swapiService = new swapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotatioPeriod: null,
    diameter: null
  }

  constructor(){
    super();
    this.updatePlanet()
  }

  updatePlanet() {
    const id = Math.floor(Math.random()* 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotatioPeriod: planet.rotation_period,
          diameter: planet.diameter
        })
      })
  }
  render() {
    const { id, name, population, rotatioPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{ rotatioPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
