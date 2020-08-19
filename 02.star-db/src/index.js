import { requestType } from './consts';

class SwapiService {
  _apiBas = 'https://swapi.dev/api'; 
  async getResource(url){
    const res = await fetch(`${this._apiBas}${url}`);

    if(!res.ok){
      throw new Error(`${url}  status ${res.status}`)
    }

    return await res.json();
  }

  async getAllPeople(){
    const res = await this.getResource(`/${requestType.people}/`);
    return res.results;
  }
  
  getPerson(id){
    return this.getResource(`/${requestType.people}/${id}`);
  }

  async getAllPlanets(){
    const res = await this.getResource(`/${requestType.planets}/`);
    return res.results;
  }

  getPlanet(id){
    return this.getResource(`/${requestType.planets}/${id}`);
  }

  async getAllStarships(){
    const res = await this.getResource(`/${requestType.starships}/`);
    return res.results;
  }

  getStarships(id){
    return this.getResource(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getPerson(3)
  .then(people => {
      console.log(people.name)
  })