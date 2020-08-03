import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Product from './Product/Product'
import Products from './Products/Products'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/products/:slug" component={Product} />
    </Switch>
  )
}

export default App;
