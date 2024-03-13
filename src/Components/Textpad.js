import React, { useState, useEffect } from 'react';
import { generateRandomParagraph, renderHighlightedText } from '../Helper/ParagraphGenerator.js';

const Textpad = () => {
    const [paragraph, setParagraph] = useState(generateRandomParagraph());
    const [typedText, setTypedText] = useState('');
    const [typingStarted, setTypingStarted] = useState(false);
    const [timer, setTimer] = useState(30);
    const [characherCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const words = paragraph.split(' ');

    useEffect(() => {
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
            const typedWords = typedText.split(' ');
            let correctWords = 0, wrong = 0;
            for (let i = 0; i < typedWords.length; i++) 
            {
                if (typedWords[i] === words[i]) {
                    correctWords++;
                } 
                else {
                    wrong++;
                }
            }
            correctWords+=Math.round(correctWords/10);
            correctWords*=2;
            if(wrong){
                correctWords++;
            }
            setWordCount(correctWords);
        }
        
    }, [timer, typingStarted]);

    const handleTyping = (e) => {
        setTypingStarted(true);
        const typed = e.target.value;
        setTypedText(typed);

        let correctCount = 0;
        for (let i = 0; i < typed.length; i++) 
        {
            if (typed[i] === paragraph[i]) {
                correctCount++;
            } 
        }
        setCharacterCount(correctCount);
    };

    const refreshParagraph = () => {
        setParagraph(generateRandomParagraph());
        setTypedText('');
        setTypingStarted(true);
        document.getElementById("inputField").focus();
        setTypingStarted(false);
        setTimer(30);
        setCharacterCount(0);
    };

    return ( 
        <div className='col p-5 m-5 heading-font'>
            <div className=' row'>
                <div className='h4 col text-warning'>
                    <span className='text-white h5'>{timer!==0 ? 'Timer :': 'Time Over!'} </span>
                    {timer? timer: ''}
                </div>
                <div className='h4 col text-warning text-center'>
                    {!timer? `${wordCount} WPM`: ''}
                </div>
                <div className='h5 col text-white text-center'>
                    {!timer? `${characherCount} Characters Typed Correctly`: ''}
                </div>
            </div>
            <p className='p-4 lh-lg shadow h4 rounded text-white bg-secondary'>
                {renderHighlightedText(paragraph, typedText, typingStarted, wordCount, setWordCount, characherCount, setCharacterCount)}
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
