import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Switch,
  Route,
  Router,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import OutfitRecommendationPage from "./pages/OutfitRecommendationPage";

function App() {
  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <OutfitRecommendationPage {...props} message="This is Screen C" />;
  };
  return (
    <BrowserRouter>
      <Route>
        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/main" component={MainPage} />
        <Route
          path="/outfit-recommendation"
          render={OutfitRecommendationPage}
        />
      </Route>
    </BrowserRouter>
  );
}

export default App;
