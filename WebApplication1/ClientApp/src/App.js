import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css'
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';



export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/sign-up" exact component={SignUp}/>

          </switch>
        </Router>
      </>
    );
  }
}
