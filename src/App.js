import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import ListBooks from './Components/ListBooks';
import SearchBooks from './Components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  updateBook = (book, shelf) => {
    this.setState(state => ({
      books: state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = shelf;
          return b
        }
        return b;
      })
    }));
    BooksAPI.update(book, shelf)
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} name='MyReads' updateBook={this.updateBook} />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks myBooks={this.state.books} updateBook={this.updateBook}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
