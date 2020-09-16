import React, { Component } from 'react';

import Row from 'components/row';
import { PersonList, PersonDetails } from 'components/sw-components';

export default class PeoplePage extends Component {

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
          left={<PersonList onItemSelected={this.onItemSelected}/>} 
          right={<PersonDetails itemId={selectedPerson}/>}  />
    );
  }
}
 
