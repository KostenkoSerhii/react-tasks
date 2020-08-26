import React from 'react';

import { SwapiServiceConsumer } from 'components/swapi-service-context';

const withSwapiService = Wrapper => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {
          swapiService => {
            return (
              <Wrapper {...props} swapiService={swapiService}/>
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService;