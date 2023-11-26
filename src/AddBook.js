import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
    const handleonSubmit = (book) => {
        console.log(book)
    }
    return (
        <div>
            <h3>AddBook</h3>
            <BookForm handleonSubmit ={handleonSubmit}/>
        </div>
    );
}

export default AddBook;
