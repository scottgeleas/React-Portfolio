import React from 'react';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';

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
        </div>
    );
}

export default Footer;
