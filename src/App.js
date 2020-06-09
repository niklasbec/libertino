import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Offer from "./components/Offer"
import {Route} from "react-router-dom"
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/angebot" component={Offer} />
      <Route exact path="/ueber-mich" component={Aboutme} />
    </div>
  );
}

export default App;
