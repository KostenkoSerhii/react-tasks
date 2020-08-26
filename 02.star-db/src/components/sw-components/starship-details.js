import React from 'react';  

import ItemDetails, { Record } from 'components/item-details';

import { withSwapiService } from 'components/hoc-helpers';

const PersonDetails = ({itemId, swapiService}) => {
  const { getStarship, getStarshipImage } = swapiService;
  return(
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

export default  withSwapiService(PersonDetails)