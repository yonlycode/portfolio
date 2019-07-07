import React, { Component } from 'react';
import AppRouter from './AppRouter';
import "./assets/css/app.css";
import "./assets/css/responsive.css"
import ActivityIndicator from './Components/layout/Activity-Indicator/ActivityIndicator';
import ErrorBoundary from './Components/layout/Error-Boundary/ErrorBoundary';


const App = () :React.FunctionComponentElement<{}>=>{
  let content = <>
    <ErrorBoundary>
      <React.Suspense fallback={ActivityIndicator}>
        <div className="App">
          <AppRouter/>
        </div>
      </React.Suspense>
    </ErrorBoundary>
  </>;

  return content;
}

export default App

