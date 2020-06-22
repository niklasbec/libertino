import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Offer from "./components/Offer"
import {Route} from "react-router-dom"
import Aboutme from './components/Aboutme';
import References from './components/References';
import Contact from './components/Contact';
import Impressum from "./components/Impressum"
import Security from './components/Security';

function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/angebot" component={Offer} />
      <Route exact path="/ueber-mich" component={Aboutme} />
      <Route exact path="/referenzen" component={References} />
      <Route exact path="/kontakt" component={Contact} />
      <Route exact path="/impressum" component={Impressum} />
      <Route exact path="/datenschutz" component={Security} />
    </div>
  );
}

export default App;
