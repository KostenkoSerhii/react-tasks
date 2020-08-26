import React from 'react';  
import ItemDefails, {Record} from 'components/item-details';

import SwapiService from 'services/swapi-services';
import ItemDetails from 'components/item-details';

const swapi = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapi
const PersonDetails = ({itemId}) => {
  return(
    <ItemDefails 
    itemId={itemId} 
    getData={getPerson}
    getImageUrl={getPersonImage}
    >
    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye Color"/>
  </ItemDefails>
  )
}
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDefails
    itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
  >
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation period"/>
      <Record field="diameter" label="Diameter"/>
  </ItemDefails>
  )
}
const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
    itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}
  >
      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
  </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}