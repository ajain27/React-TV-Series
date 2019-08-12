import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Series from '../../containers/Series/series-container'
import SingleSeries from '../../containers/SingleSeries/singleSeries'

const Routes = props => (
  <Switch>
    <Route exact path='/' component={Series} />
    <Route exact path='/series/:id' component={SingleSeries} />
  </Switch>
)

export default Routes
