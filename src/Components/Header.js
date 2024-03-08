import React from 'react';
import Typewriter from './Typewriter';

function Header() {
    return ( 
        <div className='row bg- m-0 p-3 rounded-bottom head-gradient shadow text-white'>
            <div className='col-3 m-0, p-0'>
                <Typewriter componentClasses="h3 m-0 heading-font" speed={300} text="Tyypos!" /> 
                <span className='p-0 m-0'><i><sub>Break The Keys...</sub></i></span>
            </div>
        </div>
     );
}

export default Header;
