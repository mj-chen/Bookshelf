import React, { Component } from 'react'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import AddBook from './AddBook'
import PropTypes from 'prop-types'

class ListBook extends Component {
  render(){
    const {books, statusChange} = this.props
    let currentlyReading = books.filter(book=>book.shelf === 'currentlyReading'),
        wantToRead = books.filter(book=> book.shelf === 'wantToRead'),
        read = books.filter(book=> book.shelf === 'read')
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading currentlyReadingBooks={currentlyReading} moveBook={statusChange}/>
            <WantToRead wantToReadBooks={wantToRead} moveBook={statusChange}/>
            <Read readBooks={read} moveBook={statusChange}/>
          </div>
        </div>
        <AddBook/>
      </div>
    )
  }
}

ListBook.propTypes = {
  books:PropTypes.arrayOf(PropTypes.object),
  statusChange:PropTypes.func
}

export default ListBook