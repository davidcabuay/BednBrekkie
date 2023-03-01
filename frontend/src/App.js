
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormModal/SignupForm";
import Navigation from './components/Navigation';
import ListingIndex from './components/Listings/ListingIndex';
import ListingShow from './components/Listings/ListingShow';

function App() {
  return (
    <>
      <Navigation /> 
        <Switch>
          <Route exact path="/">
            <ListingIndex />
          </Route>
          <Route exact path="/listings/:listingId">
            <ListingShow />
          </Route>
        </Switch>
    </>
  );
}

export default App;