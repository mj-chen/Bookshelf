import React, { Component } from 'react'
import SearchBook from './SearchBook'
import ShowBook from './ShowBook'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'


class SearchPage extends Component {
  state={
    books:[],
    message:''
  }

  updateBook=(value)=>{
    let validTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography','Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education','Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi','Homer', 'Horror', 'Hugo', 'Ibsen','Journey','Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money','Mystery','Negotiate', 'Painting', 'Philosophy','Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    if(validTerms.includes(value)){
      BooksAPI.search(value, 10)
    		  .then(books=>{
        	    books.map(book=>{
                    book.shelf='none'
                    return this.props.booksOnShelf.map(bookonshelf=>{
                      	     if(book.id === bookonshelf.id){
                                book.shelf = bookonshelf.shelf
                             }
                             return book          
                    })
                  })
                this.setState({message:''})
      		    this.setState({books})
            })
    }else{
      if(value === ''){
        this.setState({books:[]})
        this.setState({message:''})
      }else{
        this.setState({message:'Please enter a valid search term'})
      }
    }
  }

  render(){
    return(
      <div className="search-books">
        <SearchBook findBook={this.updateBook}/>
        <ShowBook booksFound={this.state.books} 
       			  addBook={this.props.statusChange}
       			  message={this.state.message}
        />
      </div>
    )
  }
}

SearchPage.propTypes={
  statusChange:PropTypes.func
}
export default SearchPage