import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
