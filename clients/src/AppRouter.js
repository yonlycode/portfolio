import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Header from './components/Header';
import Footer from './components/Footer';


import HomePage from './pages/user/HomePage';
import ContactPage from './pages/user/ContactPage';
import ServicePage from './pages/user/ServicePage';
import AboutMePage from './pages/user/AboutMePage';
import WorkPage from './pages/user/WorkPage';
import BlogPage from './pages/user/BlogPage';
import OnBuildPage from './pages/user/OnBuildPage'

import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminHomePage from './pages/admin/AdminHomePage';

export default class AppRouter extends Component {

    constructor(props){
        super(props);
        this.state={
            isAuth:false,
        }
    }

    handleAuth=()=>{

    }

    
  render() {
    const { isAuth } = this.state

    /* if user is not authentified, app will use this router */
    const anonRoute = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ServicePage} />
        <Route path="/about-me" component={AboutMePage} />
        <Route path="/works" component={OnBuildPage} />
        <Route path="/blog" component={OnBuildPage} />
        <Route path="/admin" component={AdminLoginPage} />
      </Switch>
    )

    /* if user is authentified, app will use this router */
    const adminRoute = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ServicePage} />
        <Route path="/about-me" component={AboutMePage} />
        <Route path="/works" component={OnBuildPage} />
        <Route path="/blog" component={OnBuildPage} />
        <Route path="/admin" component={AdminHomePage} />

      </Switch>
    )

    return (
        <Router>
          <div>
            <Header/>
                {
                  //change router on auth
                  isAuth ? adminRoute : anonRoute
                }
            <Footer/> 
          </div>
            
      </Router>
    )
  }
}
