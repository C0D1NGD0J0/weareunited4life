import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./ReduxStore";
import Auth from "./components/auth/Auth";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import UserProfile from "./components/user/Profile";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ErrorPage from "./components/layouts/404";
import ErrorBoundary from "./components/errorBoundary";
import Category from "./components/category/";
import AllPosts from "./components/post/allPosts";
import Post from "./components/post/singlePost/index";
import PostsTags from "./components/tags/index";
import Messages from "./components/messages/index";
import NewPost from "./components/post/newPost";
import Dashboard from "./components/dashboard/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import "./helpers/validateAuthUser";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Router>
        	<div className="App">
            <Navbar />
              <ErrorBoundary>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/(login|signup)" component={Auth} />

                  <Route exact path="/posts" component={AllPosts} />
                  <PrivateRoute path="/posts/new" component={NewPost} />
                  <Route path="/posts/:postId" component={Post} />
                  <PrivateRoute path="/posts/:postId/edit" component={NewPost} />
                  <Route path="/posts/tags/:tag" component={PostsTags} />

                  <PrivateRoute exact path="/category" component={Category} />
                  <PrivateRoute path="/:username/profile" component={UserProfile} />
                  <Route exact path="/reset/:token" component={ResetPassword} />
                  <Route exact path="/forgot_password" component={ForgotPassword} />
                  <PrivateRoute exact path="/messages" component={Messages} />

                  <Route component={ErrorPage} />
                </Switch>
              </ErrorBoundary>
            <Footer />
        	</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
