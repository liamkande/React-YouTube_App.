import React, { Component } from 'react'

class  SearchBar extends Component {
  constructor(props){
  	super(props)

  	this.state = {term: ''}
  }
  render() {
    return (
      <div className="row">
        <div className="col-8 search-bar">
          <input
            value={this.state.term}
            onChange= {e => this.setState({ term: e.target.value })}
           />
        </div>
      </div>
    )
  }
}
export default SearchBar
