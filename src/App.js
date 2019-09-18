import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from '../src/pages/homepage/homepage';
import signInAndUpPage from '../src/pages/signin-up/signin-up';
import ShopPage from '../src/pages/shop/shop';
import Header from './components/header/header';




function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={signInAndUpPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
