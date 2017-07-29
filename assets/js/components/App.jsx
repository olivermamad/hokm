import React from 'react';
import ErrorBoundary from './ErrorBoundary'
import Game from './Game'

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Game />
      </ErrorBoundary>
    )
  }
}
