import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Series from '../../containers/Series/series-container'

const Routes = props => (
  <Switch>
    <Route exact path='/' component={Series} />
  </Switch>
)

export default Routes
