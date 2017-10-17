import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/home.jsx'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={null} />
    </Switch>
  </BrowserRouter>
),
  document.getElementById('content')
)
