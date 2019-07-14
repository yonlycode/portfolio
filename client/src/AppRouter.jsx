import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Analytics from 'react-router-ga';
/* Layout generic import */
import Header from './Components/layout/header/Header';
import Footer from './Components/layout/footer/Footer';

//Routes settings
import PrivateRoute from './utils/Private-Route/PrivateRoute';
import Routes from './utils/routes';


const AppRouter = () =>{
    let routes = Routes.map((val , i)=>{
        if (val.private){
            return val.exact?<PrivateRoute 
                path={val.path} 
                exact
                component={()=>val.component}  
            />:<PrivateRoute 
                path={val.path} 
                component={()=>val.component}  
            />
        }else{
            return val.exact?<Route 
                path={val.path} 
                exact
                component={()=>val.component}  
            />:<Route 
                path={val.path} 
                component={()=>val.component}  
            />
        }
    });

    let content = <>
    <Router>
        <Analytics id="UA-135789824-1">   
            <Header/>
            <Switch>
                {routes}
                <Redirect to="not-found"/> 
            </Switch>
            <Footer/> 
        </Analytics>  
    </Router>
  </>;

    return content;
}
export default AppRouter;

