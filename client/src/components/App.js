import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './headers';
import './../styles/App.css';
import Cart from './cart';
import ProductList from './productList';
import Product from './productList/Product';
import Home from './home';

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="outerWrapper">
          <Header />
          <div className='container'>
            <Switch>
              <Route path='/cart' component={Cart}></Route>          
              <Route path='/products' component={ProductList}></Route>          
              <Route exact path='/product/:id' component={Product}></Route>          
              <Route exact path='/' component={Home}></Route>
            </Switch>
          </div>
            
        </div>
      </BrowserRouter>
  )
}

export default App
