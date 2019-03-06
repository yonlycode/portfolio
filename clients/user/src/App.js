import React, { Component } from 'react';
import AppRouter from './AppRouter';
import "./assets/css/app.css";
import "./assets/css/responsive.css"

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppRouter/>
      </div>
    );
  }
}

export default App;
