import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routes from 'routing/PATHS'

import Home from 'containers/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.withoutAuth.home} component={Home} />
        <Redirect exact from="/*" to={routes.withoutAuth.home} />
      </Switch>
    </Router>
  )
}

export default App
