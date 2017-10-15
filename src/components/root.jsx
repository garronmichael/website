import React from 'react'
import ReactDOM from 'react-dom'
import Radium, { StyleRoot } from 'radium'
import ReactRouterDOM, { BrowserRouter, Route } from  'react-router-dom'

import Home from './home.jsx'

class Root extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Home />
      </StyleRoot>
    )
  }
}

export default Root
