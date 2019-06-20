import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Analytics from 'react-router-ga';

/* Layout generic import */
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import PrivateRoute from './utils/Private-Route/PrivateRoute';

/* Page component lazy import */
const HomePage = lazy(()=>import('./pages/user/HomePage'));
const ContactPage = lazy(()=>import('./pages/user/ContactPage'));
const ServicePage = lazy(()=>import('./pages/user/ServicePage'));
const AboutMePage = lazy(()=>import('./pages/user/AboutMePage'));
const OnBuildPage = lazy(()=>import('./pages/user/OnBuildPage'));
const AdminLoginPage = lazy(()=>import('./pages/admin/Admin-Loggin.js/AdminLoginPage'));
const WorkPage = lazy(()=>import('./pages/user/WorkPage'));
const BlogPage = lazy(()=>import('./pages/user/BlogPage'));
const NotFoundPage = lazy(()=>import('./pages/user/Not-Found-Page/NotFoundPage'))

/* Admin */
const AdminDashboard = lazy(()=>import('./pages/admin/Admin-Dashboard/AdminDashboard'))
const AdminAccountSetting = lazy(()=>import('./pages/admin/Admin-Account-Setting/AdminAccountSetting'))
const AdminBlog = lazy(()=>import('./pages/admin/Admin-Blog/AdminBlog'))
const AdminPortfolio = lazy(()=>import('./pages/admin/Admin-Portfolio/AdminPortfolio'))
const AdminService = lazy(()=>import('./pages/admin/Admin-Services/AdminService'))
const AdminSkill = lazy(()=>import('./pages/admin/Admin-Skills/AdminSkill'))
const AdminUpload = lazy(()=>import('./pages/admin/Admin-Upload/AdminUpload'))

export default class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Analytics id="UA-135789824-1">   
            <Header/>
              <Switch>

                {/* Public Routes */}
                <Route path="/" exact component={()=><HomePage/>} />
                <Route path="/contact" component={()=><ContactPage/>} />
                <Route path="/service" component={()=><ServicePage/>} />
                <Route path="/about-me" component={()=><AboutMePage/>} />
                <Route path="/work" component={()=><WorkPage/>} />
                <Route path="/blog" component={()=><BlogPage/>} />
                <Route path="/login" component={()=><AdminLoginPage/>} />
                <Route path="/not-found" component={()=><NotFoundPage/>} />

                
                {/* Admin Private Routes */}
                <PrivateRoute path="/admin" component={()=><AdminDashboard/>} />
                <PrivateRoute path="/admin-setting" component={()=><AdminAccountSetting/>} />
                <PrivateRoute path="/admin-blog" component={()=><AdminBlog/>} />
                <PrivateRoute path="/admin-work" component={()=><AdminPortfolio/>} />
                <PrivateRoute path="/admin-service" component={()=><AdminService/>} />
                <PrivateRoute path="/admin-skill" component={()=><AdminSkill/>} />
                <PrivateRoute path="/admin-upload" component={()=><AdminUpload/>}/>

                {/* Redirection for 404 not found page */}
                <Redirect to="not-found"/> 

              </Switch>
            <Footer/> 
          </Analytics>          
      </Router>
    )
  }
}
