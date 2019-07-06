import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function Bookshelf(props) {
    const { books, shelf, updateBook } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => <li key={book.id}><Book book={book} updateBook={updateBook}></Book></li>)}
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
};

export default Bookshelf;
