import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/ProductIndexPage/ProductIndex';
import ProductShow from './components/ProductShowPage/ProductShow';
import HomePage from './components/HomePage'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navigation/>
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
          <Route exact path="/" >
            <HomePage/>
          </Route>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;