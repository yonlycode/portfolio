import React, { Component } from 'react';
import ReactGA from 'react-ga';
import AppRouter from './AppRouter';
import "./assets/css/app.css";
import "./assets/css/responsive.css"

function initializeReactGA() {
  ReactGA.initialize('UA-135789824-1', {
  debug: false,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
})
  ReactGA.pageview(window.location.pathname + window.location.search);
}
class App extends Component {
  constructor(props){
    super(props);
    initializeReactGA();
  }
  render() {
    return (
      <div className="App">
          <AppRouter/>
      </div>
    );
  }
}

export default App;
