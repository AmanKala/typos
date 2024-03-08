import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) 
      {
        setDisplayText(prevText => prevText + text.charAt(currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
        setShowCursor(prevShowCursor => !prevShowCursor);
      } 
      else 
      {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setShowCursor(false);
          const blinkInterval = setInterval(() => {
            setShowCursor(prevShowCursor => !prevShowCursor);
          }, 500);

          setTimeout(() => {
            clearInterval(blinkInterval);
          }, 6000);
        }, 5000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, currentIndex]);

  return { displayText, showCursor };
};

export default useTypewriter;
