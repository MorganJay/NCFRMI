import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import HomePage from "./pages/HomePage";
import DataCollection from "./pages/DataCollection";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage landingPageData={landingPageData} {...props} />
          )}
        />
        <Route exact path="/auth"></Route>
        <Route exact path="/form" component={DataCollection} />
      </Switch>
    </div>
  );
};

export default App;
