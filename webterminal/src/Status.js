import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Status extends Component {
  state={
    shelf:this.props.target.shelf
  }
  changeShelf=(shelf, target)=>{
    this.setState({shelf})
    this.props.move(shelf,target)
  }
  render(){
    const {target} = this.props
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={(e,book)=>this.changeShelf(e.target.value,target)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

Status.propTypes={
  target:PropTypes.object,
  move:PropTypes.func
}
export default Status