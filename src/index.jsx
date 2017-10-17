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

import PalmTreeImage from './assets/images/palm_tree.jpg'

ReactDOM.render((
  <StyleRoot>
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(${PalmTreeImage})`,
          backgroundOrigin: 'border-box',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hire" component={Hire} />
          <Route component={null} />
        </Switch>
      </div>
    </BrowserRouter>
  </StyleRoot>
),
  document.getElementById('content')
)
