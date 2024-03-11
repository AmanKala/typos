import words from './Words.js';

const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

export const generateRandomParagraph = () => {
    const randomWordList = Array.from({ length: 40 }, () => getRandomWord());
    return randomWordList.join(' ');
};

export const renderHighlightedText = (paragraph, typedText, typingStarted) => {
    const letters = paragraph.split('');
    const typedLetters = typedText.split('');
    
    return letters.map((letter, index) => {
        let className = 'text-muted';
        
        if (typingStarted && typedLetters[index] === letter) {
            className = 'text-white';
        } else if (typingStarted && typedLetters[index] !== letter && typedLetters[index] !== '' && index < typedLetters.length) {
            className = 'text-danger';
        }

        return <span key={index} className={className}>{letter}</span>;
    });
};
