import React from 'react';
import { Button, Form } from 'react-bootstrap';

const BookForm = () => {


    return (
        <div>
      
            <div className='mainform'>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Book name</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="text"
                            name="bookname"
                            placeholder="Enter name of book"
                          />
                    </Form.Group>
                    <Form.Group controlId='author'>
                        <Form.Label>Book Author</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="text"
                            name="author"
                            placeholder="Enter name of author"
                          />
                    </Form.Group>
                    <Form.Group controlId='quanity'>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            className="inputcontrol"
                            type="quantity"
                            name="quantity"
                            placeholder="Enter available quantity"
                          />
                    </Form.Group>
                    <Form.Group controlId='price'>
                        <Form.Label>Book Price</Form.Label>
                        <Form.Control className="inputcontrol"
                            type="text"
                            name="price"
                            placeholder="Enter price of book"
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