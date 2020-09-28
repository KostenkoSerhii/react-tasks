import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from 'components/pages';
import './app.sass';

const App = ({bookstoreService}) => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/cart' component={CartPage}/>
    </Switch>
  )
}
export default App;
