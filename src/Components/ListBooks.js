import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';


function ListBooks(props) {
    const { books, updateBook, name } = props;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>{name}</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {currentlyReading.length ? <Bookshelf shelf='Currently Reading' books={currentlyReading} updateBook={updateBook} /> : ""}
                    {wantToRead.length && <Bookshelf shelf='Want to Read' books={wantToRead} updateBook={updateBook} />}
                    {read.length && <Bookshelf shelf='Read' books={read} updateBook={updateBook} />}
                </div>
            </div>
            <div className="open-search">
                <Link className="open-search-link" to='/search'>Add a book</Link>
            </div>
        </div>
    );
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default ListBooks;
