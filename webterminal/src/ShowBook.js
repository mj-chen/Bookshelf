import React, { Component } from 'react'
import Status from './Status'
import PropTypes from 'prop-types'

class ShowBook extends Component {
  render(){
    const {booksFound, addBook} = this.props
    return(
      <div className="search-books-results">
         {(this.props.message !== '') &&<div>{this.props.message}</div>}
         <ol className="books-grid">
      		 {booksFound.map(book =>(
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:(book.imageLinks)?                                                 `url(${book.imageLinks.thumbnail})`:''}}></div>
                      <Status target={book} move={addBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
					{book.authors && (<div className="book-authors">{book.authors.join(' ')}</div>)}
                  </div>
                </li>
               )
             )}
         </ol>
      </div>
    )
  }
}

ShowBook.propTypes={
  booksFound:PropTypes.arrayOf(PropTypes.object),
  addBook:PropTypes.func
  
}

export default ShowBook