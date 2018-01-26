import React, { Component } from 'react'
import './App.css'
import YTSearch from 'youtube-api-search'
import SearchBar from './Components/search_bar'
import VideoList from './Components/video_list'
import VideoDetail from './Components/video_detail'
const API_KEY = 'AIzaSyDclA4nKWjX6anU_J2erH30mwdNY7ysW3M'

class App extends Component {
  constructor(props){
  	super(props)
  	this.state = { videos: [] }
    YTSearch({key: API_KEY, term: 'beyonce'}, (videos) => {
      //ES6 Condensed syntax because the name of the value being passed is identical to the name of data
      this.setState({videos})
      //The most familiar way to accomplish the same thing:
      //this.setState({videos: videos })
    })
  }

  render() {
    return (
      <div className="container">
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App
