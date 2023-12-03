import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const BookForm = (props) => {
    const  [book, setBook] = useState(() => {
        return {
            bookname: props.book ? props.book.bookname : '',
            author: props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity : '',
            price: props.book ? props.book.price : '',
            date: props.book ? props.book.date : ''
        }
    })

    const [errormessage, setErrorMessage] = useState('');
    const {bookname, author, price, quantity} = book


    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        switch(name){
            case 'quantity':
                if(value === '' || parseInt(value) ===+value){
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }))
                }
                break;
                case 'price':
                    if (value === '' || value.matchh(/^\d{1,}(\.\d{0,2})?$/)){
                        setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                        }))

                    }
                    break;
                    default:
                        setBook((prevState) => ({
                            ...prevState,
                            [name]: value
                        }));

        }
    }
    
    return (
        <div>
      
            <div className='mainform'>
                <Form >
                    <Form.Group controlId='name'>
                        <Form.Label>Book name</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="text"
                            name="bookname"
                            placeholder="Enter name of book"
                            value={bookname}
                            onChange={handleChangeInput}
                          />
                    </Form.Group>
                    <Form.Group controlId='author'>
                        <Form.Label>Book Author</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="text"
                            name="author"
                            placeholder="Enter name of author"
                            value={author}
                            onChange={handleChangeInput}
                          />
                    </Form.Group>
                    <Form.Group controlId='quanity'>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="quantity"
                            name="quantity"
                            placeholder="Enter available quantity"
                            value={quantity}
                            onChange={handleChangeInput}
                          />
                    </Form.Group>
                    <Form.Group controlId='price'>
                        <Form.Label>Book Price</Form.Label>
                        <Form.Control className="inputcontrol"
                            type="text"
                            name="price"
                            placeholder="Enter price of book"
                            value={price}
                            onChange={handleChangeInput}
                            > 
                        </Form.Control>
                        <Button type='submit' className='submitbtn'>
                            Submit
                        </Button>

                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default BookForm;
/* book form */