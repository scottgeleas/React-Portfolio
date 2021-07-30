import React from 'react';
import Navigation from './Navigation';
import planet1 from '../icons/planet1.png';
import planet2 from '../icons/planet2.png';
import planet3 from '../icons/planet3.png';

function Header(props) {
    return (
        <div>
            <div className='hero'>
                <img
                    className='planet1'
                    src={planet1}
                    alt='spinning green globe'
                />
                <img
                    className='planet2'
                    src={planet2}
                    alt='blueish-violet planet'
                />
                <img
                    className='planet3'
                    src={planet3}
                    alt='fiery world in the distance'
                />
            </div>
            <Navigation setCurrentPage={props.setCurrentPage} />
        </div>
    );
}

export default Header;
