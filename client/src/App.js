import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./ReduxStore";
import Auth from "./components/auth/Auth";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import UserProfile from "./components/user/Profile";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/layouts/Alert";
import ErrorPage from "./components/layouts/404";
import ErrorBoundary from "./components/errorBoundary";
import Category from "./components/category/";
import Post from "./components/post/singlePost/index";
import AllPosts from "./components/post/allPosts";
import PostsByCategory from "./components/post/postsByCategory";
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
                <Alert />
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/(login|signup)" component={Auth} />

                  <Route exact path="/posts" component={AllPosts} />
                  <PrivateRoute path="/posts/new" component={NewPost} />
                  <PrivateRoute path="/posts/:postId/edit" component={NewPost} />
                  <Route exact path="/posts/tags/:tag" component={PostsTags} />
                  <Route exact path="/posts/category/:categoryId" render={ (props) => <AllPosts {...props} key={Math.random()}/>} />
                  <Route path="/posts/:postId" component={Post} />

                  <PrivateRoute exact path="/category" component={Category} />
                  <PrivateRoute path="/:username/profile" component={UserProfile} />
                  <Route exact path="/reset/:token" component={ResetPassword} />
                  <Route exact path="/forgot_password" component={ForgotPassword} />
                  <PrivateRoute path="/messages/:receiverId?" component={Messages} />

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
