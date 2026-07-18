import { useEffect, useState } from "react";
import "./TypingText.css";

export default function TypingText({
  text,
  speed = 100,
  style = {},
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return (
    <h1
      className="typing-title"
      style={{
        color: style.color,
        ...style,
      }}
    >
      {displayed}

      <span
        className="typing-cursor"
        style={{
          borderColor: style.color,
        }}
      ></span>
    </h1>
  );
}