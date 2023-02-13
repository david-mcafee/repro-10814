import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Viewport from "./Components/Viewport";
import SessionSection from "./Components/SessionSection";
// import SessionSection2 from "./Components/SessionSection2";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Viewport>
            <Switch>
              <Route exact path="/">
                <SessionSection />
              </Route>
              {/* <Route exact path="/SessionSection2">
                <SessionSection2 />
              </Route> */}
            </Switch>
          </Viewport>
        </div>
      </Router>
    </div>
  );
}

export default App;
