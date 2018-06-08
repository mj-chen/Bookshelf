import React, { Component } from 'react'
import Status from './Status'
import PropTypes from 'prop-types'

class WantToRead extends Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.wantToReadBooks.map(book=>(
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:(book.imageLinks)?                                                 `url(${book.imageLinks.thumbnail})`:''}}></div>
                      <Status target={book} move={this.props.moveBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && (<div className="book-authors">{book.authors.join(' ')}</div>)}
                  </div>
                </li>  				
                )
              )}
            </ol>
          </div>
        </div>
    )
  }
}

WantToRead.propTypes = {
  wantToReadBooks:PropTypes.arrayOf(PropTypes.object),
  moveBook:PropTypes.func
}

export default WantToRead