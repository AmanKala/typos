import React, { useState } from 'react';
import { generateRandomParagraph } from '../Helper/ParagraphGenerator.js';

const Textpad = () => {
    const [paragraph, setParagraph] = useState(generateRandomParagraph());

    const refreshParagraph = () => {
        setParagraph(generateRandomParagraph());
    };
    
    return ( 
        <div className='col p-5 m-5'>
            <p className='p-4 shadow h4 text-muted rounded  text-white bg-secondary'>{paragraph}</p>
            <div className='text-center'>
                <button className="btn btn-success m-3 p-2 shadow px-5">Start</button>
                <button className="btn btn-secondary m-3 p-2 shadow px-5" onClick={refreshParagraph}>Refresh</button>
            </div>
        </div>
     );
}

export default Textpad;
