import words from './Words.js';

const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

export const generateRandomParagraph = () => {
    const randomWordList = Array.from({ length: 50 }, () => getRandomWord());
    return randomWordList.join(' ');
};
