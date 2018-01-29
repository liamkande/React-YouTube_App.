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
            onChange= {e => this.onInputChange(e.target.value)}
           />
        </div>
      </div>
    )
  }

onInputChange(term) {
  this.setState({term})
  this.props.onSearchTermChange(term)
}
}
export default SearchBar
