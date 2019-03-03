import React, { Component } from 'react';
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
      	<div className="App">
      		<Navbar />
      			<Route exact path="/" component={Landing} />
        	<Footer />
      	</div>
      </Router>
    );
  }
}

export default App;
