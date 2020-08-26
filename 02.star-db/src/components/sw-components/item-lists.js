import React from 'react';

import ItemList from 'components/item-list';
import { withData } from 'components/hoc-helpers';

import SwapiService from 'services/swapi-services';

const swapiService = new SwapiService();
const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;


const withChildFunction = (Wrapped, fn) => {
  return props => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>


const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets)
const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}