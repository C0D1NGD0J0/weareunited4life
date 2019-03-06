import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./ReduxStore";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./helpers/validateAuthUser";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Router>
        	<div className="App">
        		<Navbar />
        			<Route exact path="/" component={Landing} />
          	<Footer />
        	</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
