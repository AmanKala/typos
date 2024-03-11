import React, { useState, useEffect } from 'react';
import { generateRandomParagraph, renderHighlightedText } from '../Helper/ParagraphGenerator.js';

const Textpad = () => {
    const [paragraph, setParagraph] = useState('');
    const [typedText, setTypedText] = useState('');
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        setParagraph(generateRandomParagraph());
        setTypingStarted(true);
        
        // Focus on input when typing starts
        document.getElementById("inputField").focus(); 
    }, []);

    const handleTyping = (e) => {
        const typed = e.target.value;
        setTypedText(typed);
    };

    const refreshParagraph = () => {
        setParagraph(generateRandomParagraph());
        setTypedText('');
        setTypingStarted(true);
        document.getElementById("inputField").focus();
    };

    return ( 
        <div className='col p-5 m-5'>
            <p 
                className='p-4 lh-lg shadow h4 rounded text-white bg-secondary'>
                {renderHighlightedText(paragraph, typedText, typingStarted)}
            </p>
            <input 
                id="inputField"
                type="text" 
                className="form-control mt-3 visually-hidden"
                value={typedText} 
                onChange={handleTyping} 
            />
            <div className='text-center'>
                <button className="btn btn-secondary m-3 p-2 shadow px-5" onClick={refreshParagraph}>Refresh</button>
            </div>
        </div>
    );
}

export default Textpad;
