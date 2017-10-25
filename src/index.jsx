import ReactDOM from 'react-dom'
import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import {StyleRoot} from 'radium'
import {createBrowserHistory} from 'history'

import Home from './components/home.jsx'
import Hire from './components/hire.jsx'

import PalmTreeImage from './assets/images/palm_tree.jpg'

const history = createBrowserHistory()

history.listen((location) => {

  gtag('config', 'UA-108631840-1', {'page_path': location.pathname})
})

ReactDOM.render((
  <StyleRoot>
    <Router history={history}>
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
    </Router>
  </StyleRoot>
),
  document.getElementById('content')
)
