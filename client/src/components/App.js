import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './headers';
import './../styles/App.css';
import Cart from './cart';
import ProductList from './productList';
import Home from './home';

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="outerWrapper">
          <Header />
          <div className='container'>
            <Switch>
              <Route path='/cart'><Cart/></Route>          
              <Route path='/productList'><ProductList /></Route>          
              <Route exact path='/'><Home /></Route>
            </Switch>
          </div>
            
        </div>
      </BrowserRouter>
  )
}

export default App
