import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact(props) {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <Form>
            <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Your message here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
