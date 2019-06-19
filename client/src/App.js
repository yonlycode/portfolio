import React, { Component } from 'react';
import AppRouter from './AppRouter';
import "./assets/css/app.css";
import "./assets/css/responsive.css"
import ActivityIndicator from './components/layout/Activity-Indicator/ActivityIndicator';
import ErrorBoundary from './components/layout/Error-Boundary/ErrorBoundary';


export default class App extends Component {
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

