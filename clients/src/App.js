import React, { Component } from 'react';
import AppRouter from './AppRouter';
import "./assets/css/app.css";
import "./assets/css/responsive.css"
import ActivityIndicator from './components/stateless/Activity-Indicator/ActivityIndicator';
import ErrorBoundary from './components/layout/Error-Boundary/ErrorBoundary';


export default class App extends Component {

  componentDidMount(){
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      
    } else {
      if(window.location.protocol !== "https:"){
        window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      }
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={ActivityIndicator}>
          <div className="App">
            <AppRouter/>
          </div>
        </React.Suspense>
      </ErrorBoundary>
    );
  }
}

