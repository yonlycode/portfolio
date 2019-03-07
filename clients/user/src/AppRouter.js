import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"


import Header from './components/Header';
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import AboutMePage from './pages/AboutMePage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import OnBuildPage from './pages/OnBuildPage'

export default class AppRouter extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    
  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/services" component={ServicePage} />
                <Route path="/about-me" component={AboutMePage} />
                <Route path="/works" component={OnBuildPage} />
                <Route path="/blog" component={OnBuildPage} />
            </Switch>
            <Footer/> 
          </div>
            
      </Router>
    )
  }
}
