import React from 'react';  

import ItemDefails, {Record} from 'components/item-details';
import ItemDetails from 'components/item-details';

import { SwapiServiceConsumer } from 'components/swapi-service-context';

const PersonDetails = ({itemId}) => {
  return(
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
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
      }
    </SwapiServiceConsumer>
  )
}
const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
      }
    </SwapiServiceConsumer>
  )
}
const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
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
      }
    </SwapiServiceConsumer>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}