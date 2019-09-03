import React from 'react';
import './App.css';
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

function App() {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/api/books" component={Saved} />
            <Route exact path="/api/books/:id" component={Saved} />
            <Route exact path="/saved/" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
