import React from 'react';
import { Button, Card} from 'react-bootstrap';
const Book = ({
    id,
    bookname,
    author,
    price,
    quantity,
    date,
    handleRemoveBook
}) => {
    return (
        <div>
            book
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title  className="book-title">
                    {bookname}
                    </Card.Title>
                </Card.Body>
                <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date:</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" >Delete </Button>
            </Card>
        </div>
    );
}

export default Book;
