import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
    const handleOnSubmit = (book) => {
        console.log(book)
    }
    return (
        <div>
            <h3>AddBook</h3>
            <BookForm  handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default AddBook;
