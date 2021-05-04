import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import ErrorBoundary from './components/error-boundary/error.boundary.component'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary fallback={<div>...Loading</div>}>
          <Layout />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
