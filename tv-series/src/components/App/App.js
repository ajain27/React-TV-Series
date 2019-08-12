import React, { Component } from 'react'
import Routes from '../Router/router'
import './App.css'

import 'whatwg-fetch'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>TV Series List</h1>
        </header>
        <Routes />
      </div>
    )
  }
}

export default App
