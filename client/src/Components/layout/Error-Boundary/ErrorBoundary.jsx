import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        errorMsg:""
      };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { 
        hasError: true
      
      };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.errorMsg}</p>
          </div>;
      }
  
      return this.props.children; 
    }
  }
  
