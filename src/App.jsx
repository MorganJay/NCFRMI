import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

import HomePage from "./pages/HomePage";
import DataCollection from "./pages/DataCollection";
import Auth from "./pages/Auth";

import JsonData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [user, setUser] = useState(null);

  const updateUserState = user => setUser(user);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      {/* <Navigation data={landingPageData.Header} /> */}
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage landingPageData={landingPageData} {...props} />
          )}
        />
        <Route
          exact
          path="/data-collection"
          render={props => <DataCollection user={user} {...props} />}
        />
        <Route
          path="/auth"
          render={props => (
            <Auth user={user} setUser={updateUserState} {...props} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
