import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./ReduxStore";
import Auth from "./components/auth/Auth";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import UserProfile from "./components/user/Profile";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Dashboard from "./components/dashboard/";
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
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/(login|signup)/" component={Auth} />
            <Route exact path="/:username/profile" component={UserProfile} />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/forgot_password" component={ForgotPassword} />
          	<Footer />
        	</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
