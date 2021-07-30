import React from 'react';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import stack from '../icons/stack.png';

function Footer() {
    return (
        <div className='footer'>
            <a
                className='footerIconGithub'
                href='https://github.com/scottgeleas'
            >
                <img src={github} alt='scott on github' />
            </a>
            <a
                className='footerIcon'
                href='https://www.linkedin.com/in/scottgeleas/'
            >
                <img src={linkedin} alt='scott on linkedin' />
            </a>
            <a
                className='footerIcon'
                href='https://stackoverflow.com/users/14795964/scott-geleas'
            >
                <img src={stack} alt='scott on stack overflow' />
            </a>
        </div>
    );
}

export default Footer;
