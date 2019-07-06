import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    state = {
        query: "",
        books: []
    };

    search = query => {
        this.setState({ query: query })
        if (query !== "")
            BooksAPI.search(query.trim()).then(res => {
                this.setState({ books: Array.isArray(res) ? res : [] })
            });
        else {
            this.setState({ books: [] });
        }
    }

    render() {
        const { myBooks, updateBook } = this.props;
        const booksToShow = this.state.books.map(book => {
            const myBook = myBooks.find(b => b.id === book.id);
            if (myBook)
                return myBook;
            return book;
        })
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.search(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksToShow && booksToShow.map(book => <li key={book.id}><Book book={book} updateBook={updateBook}></Book></li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks;
