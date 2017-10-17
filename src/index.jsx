import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import {StyleRoot} from 'radium'

import Home from './components/home.jsx'
import Hire from './components/hire.jsx'

ReactDOM.render((
  <StyleRoot>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hire" component={Hire} />
        <Route component={null} />
      </Switch>
    </BrowserRouter>
  </StyleRoot>
),
  document.getElementById('content')
)
