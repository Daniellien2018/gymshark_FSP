import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/ProductIndexPage/ProductIndex';
import ProductShow from './components/ProductShowPage/ProductShow';
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import CartIndex from './components/CartIndex';

function App() {
  return (
    <>
      <Navigation/>
      {/* <CartIndex/> */}
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
          <Route exact path="/cartIndex">
            <CartIndex/>
          </Route>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;