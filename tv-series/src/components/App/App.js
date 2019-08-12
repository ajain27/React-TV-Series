import React, { Component } from 'react'
import Intro from '../Intro/intro-component'
import Series from '../../containers/Series/series-container'
import SeriesList from '../../components/SeriesList/seriesList'
import './App.css'

import 'whatwg-fetch'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>TV Series List</h1>
        </header>
        <Intro message='Here you can find all of your most loved series' />
        <Series />
      </div>
    )
  }
}

export default App
