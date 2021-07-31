import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className='contact'>
            <h2>Email Me</h2>
            <Form className='form'>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your name'
                        required
                    />
                </Form.Group>
                <div className='email'>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Your email'
                            required
                        />
                    </Form.Group>
                </div>
                <div className='message'>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={5}
                            placeholder='Your message here'
                            required
                        />
                    </Form.Group>
                </div>
                <Button variant='outline-light' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
