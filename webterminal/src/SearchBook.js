import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  state={
    query:''
  }

  updateQuery=(e)=>{
    let value = e.target.value
   	this.setState({
      query:value
    })
    let valueArray = value.split(' ')
    let newValue = valueArray.map(str=>str = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
    this.props.findBook(newValue)
  }

  render(){
    return (
       <div className="search-books-bar">
         <Link className="close-search" to='/'>Close</Link>
           <div className="search-books-input-wrapper">
           <input 
      	     value={this.state.query}
             onChange={(e)=>this.updateQuery(e)}
      		 type="text" 
      		 placeholder="Search by title or author"
		   />
         </div>
       </div>
    )
  }
}

SearchBook.propTypes={
  findBook:PropTypes.func
}

export default SearchBook