import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from 'components/pages';


import ShopHeader from 'components/shop-header';
import './app.sass';

const App = ({bookstoreService}) => {
  return (
    <main className="container">
      <ShopHeader numItems={5} total={200} />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
    </main>
  )
}
export default App;
