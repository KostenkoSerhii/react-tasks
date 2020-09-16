import React, { Component } from 'react';

import Row from 'components/row';
import { StarshipList, StarshipDetails } from 'components/sw-components';

export default class StarshipsPage extends Component {

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
          left={<StarshipList onItemSelected={this.onItemSelected}/>} 
          right={<StarshipDetails itemId={selectedPerson}/>}  />
    );
  }
}
 
