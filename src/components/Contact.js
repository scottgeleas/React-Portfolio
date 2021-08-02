import React from 'react';
import Email from '../icons/email.png';

function Contact() {
    return (
        <div className='contact'>
            <h2>Email Me</h2>
            <div className='email'>
                <h3>
                    <a href='mailto:scottgeleas97@gmail.com'>
                        scottgeleas97@gmail.com
                    </a>
                </h3>
                <img src={Email} />
            </div>
        </div>
    );
}

export default Contact;
