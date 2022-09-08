import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/Product/ProductIndex';
import ProductShow from './components/Product/ProductShow';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <ProductIndex/>
          </Route>
          <Route exact path="/products/:productId">
            <ProductShow/>
          </Route>
          <Route exact path="/" />
        </Switch>
        
    </>
  );
}

export default App;