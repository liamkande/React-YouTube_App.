import _ from 'lodash'
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
  	this.state = {
      videos: [],
      selectedVideo: null
     }
     this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //ES6 Condensed syntax because the name of the value being passed is identical to the name of data
      //this.setState({videos})
      //The most familiar way to accomplish the same thing:
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {
    // Throttles the Search Term Input
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="row">
                <div className="col-8">
                  <VideoDetail
                    video={this.state.selectedVideo}/>
                </div>
                <div className="col-4">
                  <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
                </div>
          </div>
      </div>
    )
  }
}

export default App
