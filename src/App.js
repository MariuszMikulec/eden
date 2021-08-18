import React, {Fragment} from "react";
import LandingPage from "./LandingPage";
import Projects from "./React/Projects";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink, BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/projects' component={Projects} />
        </>
      </BrowserRouter>
  );
}
export default App;

