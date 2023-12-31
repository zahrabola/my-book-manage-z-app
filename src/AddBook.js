import React from 'react';
import BookForm from './BookForm';

const AddBook = ({history, books, setBooks}) => {
    const handleOnSubmit = (book) => {
        //console.log(book)
        setBooks([book, ...books]);
        history.push('/');
    };
    return (
        <div>
            <h3>AddBook</h3>
            <React.Fragment>
            <BookForm  handleOnSubmit={handleOnSubmit} />
            </React.Fragment>
        </div>
    );
}

export default AddBook;
