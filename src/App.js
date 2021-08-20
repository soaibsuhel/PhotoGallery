import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

import CollegeFrnds from './component/CollegeFrnd';
import VarsityFrnds from './component/VersityFrnd';
import VarsityImg from './component/VarsityImg';

import Feedbacks from './component/Feedbacks';
import FirebaseData from './component/FeedbackData';
import { Redirect, Route, Switch } from "react-router";



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/gallery/collegefrnds" component={CollegeFrnds} />
        <Route exact path="/gallery/varsityfrnds" component={VarsityFrnds} />
        <Route exact path="/gallery/varsityimg" component={VarsityImg} />

        <Route exact path="/feedback" component={Feedbacks} />
        <Route exact path="/userfeedback" component={FirebaseData} />
        <Redirect to="/" />
      </Switch>

    </>
  );
};

export default App;


