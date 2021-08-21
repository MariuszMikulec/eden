import React, {useState} from "react";
import LandingPage from "./LandingPage";
import Projects from "./React/Projects";
import {
  Route,
  Switch,
 BrowserRouter,
} from 'react-router-dom';

function App() {
    //state, setState
    const [tab, setTab] = useState([]);

    return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/'>
                  <LandingPage tab={tab}/>
              </Route>
              <Route exact path='/projects'>
                  <Projects setTab={setTab} tab={tab} />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}
export default App;

