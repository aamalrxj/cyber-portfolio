import React, { useState, useEffect } from 'react';

function TypingText({ text, speed = 100, style = {} }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // Get color from style prop or fallback to white
  const textColor = style.color || '#fff';

  return (
    <h1 style={{
      fontSize: '3.9rem',
      color: textColor,
      fontWeight: 700,
      fontFamily: "'Quicksand', sans-serif",
      letterSpacing: '2px',
      textAlign: 'left',
      lineHeight: 1.2,
      margin: 0,
      whiteSpace: 'pre-line',
      ...style
    }}>
      {displayed}
      <span style={{
        borderRight: `2px solid ${textColor}`,
        marginLeft: '2px',
        animation: 'blink 1s step-end infinite'
      }}></span>
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: ${textColor} }
        }
      `}</style>
    </h1>
  );
}

export default TypingText;
