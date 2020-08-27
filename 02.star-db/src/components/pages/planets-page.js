import React, { Component } from 'react';

import Row from 'components/row';
import { PlanetList, PlanetDetails } from 'components/sw-components';

export default class PlanetsPage extends Component {

  state = { 
    selectedPerson: null
   }

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    })
  }

  render() { 
    const { selectedPerson } = this.state;

    return ( 
        <Row 
          left={<PlanetList onItemSelected={this.onItemSelected}/>} 
          right={<PlanetDetails itemId={selectedPerson}/>}  />
    );
  }
}
 
