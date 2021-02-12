import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
import {Provider} from "react-redux"
import store from "./redux/configureStore"
// import Login from "./components/Login"
const App = () => (
  <Provider store={store}>
  <Router>
    <Layout>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/blog/:id" component={BlogDetail} />
        
      </Switch>
    </Layout>
  </Router>
  </Provider>
);

export default App;
