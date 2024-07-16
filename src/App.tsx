import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ScreenA from "./pages/ScreenA";
import ScreenB from "./pages/ScreenB";
import ScreenC from "./pages/ScreenC";

function App() {
  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is Screen C" />;
  };
  return (
    <Switch>
      <Route exact={true} path="/" component={ScreenA} />
      <Route path="/b" component={ScreenB} />
      <Route path="/c/:userid" render={renderScreenC} />
    </Switch>
  );
}

export default App;
