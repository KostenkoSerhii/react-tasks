

import ItemList from 'components/item-list';
import { withData } from 'components/hoc-helpers';

import SwapiService from 'services/swapi-services';

const swapiService = new SwapiService();
const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}