import React from 'react';  

import ItemDetails, { Record } from 'components/item-details';

import { withSwapiService } from 'components/hoc-helpers';

const PlanetDetails = ({itemId, swapiService}) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return(
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
     >
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  )
}

export default  withSwapiService(PlanetDetails)