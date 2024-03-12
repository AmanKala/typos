import React, { useState, useEffect } from 'react';
import { generateRandomParagraph, renderHighlightedText } from '../Helper/ParagraphGenerator.js';

const Textpad = () => {
    const [paragraph, setParagraph] = useState('');
    const [typedText, setTypedText] = useState('');
    const [typingStarted, setTypingStarted] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        setParagraph(generateRandomParagraph());
        // Focus on input when typing starts
        document.getElementById("inputField").focus(); 
    }, []);

    useEffect(() => {
        if (timer > 0 && typingStarted) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        if(timer===0)
        {
            document.getElementById("inputField").blur();
        }
        
    }, [timer, typingStarted]);

    const handleTyping = (e) => {
        setTypingStarted(true);
        const typed = e.target.value;
        setTypedText(typed);
    };

    const refreshParagraph = () => {
        setParagraph(generateRandomParagraph());
        setTypedText('');
        setTypingStarted(true);
        document.getElementById("inputField").focus();
        setTypingStarted(false);
        setTimer(30);
    };

    return ( 
        <div className='col p-5 m-5'>
            <div className=' row'>
                <div className='h4 col text-warning'>
                    <span className='text-white h5'>{timer!==0 ? 'Timer :': ''} </span>
                    {timer? timer: 'Time Over!'}
                </div>
                <div className='h4 col text-warning text-center'>
                    {!timer? `WPM`: ''}
                </div>
                <div className='h4 col text-warning text-center'>
                    {!timer? `Characters Clicked`: ''}
                </div>
            </div>
            <p className='p-4 lh-lg shadow h4 rounded text-white bg-secondary'>
                {renderHighlightedText(paragraph, typedText, typingStarted)}
            </p>
            <input 
                id="inputField"
                type="text" 
                className="form-control mt-3 visually-hidden"
                value={typedText} 
                onChange={handleTyping} 
            />
            <div className='text-center text-white'>
                <button className="btn btn-outline-warning m-3 p-2 shadow px-5" onClick={refreshParagraph}>Refresh</button>
            </div>
        </div>
    );
}

export default Textpad;
