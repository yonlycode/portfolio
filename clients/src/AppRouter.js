import React, { Component, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom"
import Analytics from 'react-router-ga';

/* Layout generic import */
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import PrivateRoute from './utils/Private-Route/PrivateRoute';

/* Page component lazy import */

const HomePage = lazy(()=>import('./pages/user/HomePage'))
const ContactPage = lazy(()=>import('./pages/user/ContactPage'))
const ServicePage = lazy(()=>import('./pages/user/ServicePage'))
const AboutMePage = lazy(()=>import('./pages/user/AboutMePage'))
const OnBuildPage = lazy(()=>import('./pages/user/OnBuildPage'))
const AdminLoginPage = lazy(()=>import('./pages/admin/AdminLoginPage'))
const WorkPage = lazy(()=>import('./pages/user/WorkPage'))
const BlogPage = lazy(()=>import('./pages/user/BlogPage'))
const AdminHomePage = lazy(()=>import('./pages/admin/AdminHomePage'))

export default class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Analytics id="UA-135789824-1" debug>
            
            <Header/>
              <Switch>

                {/* Public Routes */}
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/services" component={ServicePage} />
                <Route path="/about-me" component={AboutMePage} />
                <Route path="/works" component={OnBuildPage} />
                <Route path="/blog" component={OnBuildPage} />
                <Route path="/login" component={AdminLoginPage} />

                
                {/* Admin Private Routes */}
                <PrivateRoute path="/admin" component={AdminHomePage} />
              </Switch>
            <Footer/> 
          </Analytics>          
      </Router>
    )
  }
}
