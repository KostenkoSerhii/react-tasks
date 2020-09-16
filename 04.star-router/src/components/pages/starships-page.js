import React from 'react';
import {withRouter} from 'react-router-dom';
import { StarshipList } from 'components/sw-components';

 const  StarshipsPage = ({history}) => {
    return ( 
      <StarshipList onItemSelected={(itemId) => { 
        history.push(`/starships/${itemId}`)
      }}/>
    );
}
 
export default withRouter(StarshipsPage);