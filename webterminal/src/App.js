import React from 'react'
import './App.css'
import ListBook from './ListBook'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    booksOnShelf:[],
  }

  componentDidMount(){
    return this.updateShelf()
  }
  
  changeStatus=(shelf, book)=>{
    BooksAPI.update(book, shelf)
    		.then(books=>{
      	      this.updateShelf()
    		})
  }

  updateShelf=()=>{
    BooksAPI.getAll()
    		.then(booksOnShelf => {
    	      this.setState({booksOnShelf})
			})
  }
  
   
  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <SearchPage
            booksOnShelf={this.state.booksOnShelf}
            statusChange={this.changeStatus}
    	  />
        )}/> 
	    <Route exact path='/' render={()=>(
          <ListBook 
            books={this.state.booksOnShelf}
            statusChange={this.changeStatus}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
