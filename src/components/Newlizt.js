import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './Newlizt.css';

class Newlizt extends Component {
    render() {
        return (

            <Form className="formbox">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridItem">
                        <Form.Label>Item</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" type="submit">
                    Post!
                </Button>
            </Form>

        );
    }
}

export default Newlizt;