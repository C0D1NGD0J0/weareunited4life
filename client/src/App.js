import React, { Component } from 'react';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <h1>UnitedFanForum</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
