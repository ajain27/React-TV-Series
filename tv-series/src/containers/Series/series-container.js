import React, { Component } from 'react'
import SeriesList from '../../components/SeriesList/seriesList'
import Intro from '../../components/Intro/intro-component'

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true })
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`).then(
      res => {
        res
          .json()
          .then(json => this.setState({ series: json, isFetching: false }))
      }
    )
  }
  render () {
    const { series, seriesName, isFetching } = this.state
    return (
      <div>
        The length of series array - {this.state.series.length}
        <div>
          <Intro message='Here you can find all of your most loved series' />
          <input
            value={seriesName}
            type='text'
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === '' && (
          <p>Please enter Series name into the input</p>
        )}{' '}
        {!isFetching && series.length === 0 && seriesName.trim() !== '' && (
          <p>No TV series found</p>
        )}
        {isFetching && <p>Loading ...</p>}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    )
  }
}

export default Series
