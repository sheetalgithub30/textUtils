import React, { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setChar(text.length);
    setWord(text.split(" ").length);
    setTime(word * 0.008);
  }, [text]);

  function space(){
    let temp = text.split(" ");
    let result = "";
    temp.forEach((item) => {
      if (item.length > 0) {
        result += item;
        result += " ";
      }
    });
    result = result.trim();
    setText(result);
  }

  return (
    <div id="home">
      <h1>TextUtis - Word Counter, Character Counter, Remove Extra Space</h1>
<div id="inner-home">


      <div>
        <h3>Enter Your text here:</h3>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        ></textarea>
      </div>

      <div id="buttons">
        <button
          id="upper"
          onClick={() => {
            setText(text.toUpperCase());
          }}
        >
          Convert UpperCase
        </button>
        <button
          id="lower"
          onClick={() => {
            setText(text.toLowerCase());
          }}
        >
          Convert LowerCase
        </button>
        <button
          id="clear"
          onClick={() => {
            setText("");
            setChar(0);
            setWord(0);
            setTime(0);
          }}
        >
          Clear Text
        </button>
        <button id="copy" onClick={navigator.clipboard.writeText(text)}>
          Copy To Clipboard
        </button>
        <button id="space" onClick={space}>Remove Extra Spaces</button>
      </div>

      <div id="summary">
        <h2>Summary Of Your Text</h2>
        <p><span>Number of words:</span> {word}</p>
        <p><span>Number of Characters: </span>{char}</p>
        <p><span>Reading Time: </span>{time}</p>
      </div>
     <h2>Preview Text: </h2>
      <pre>{text}</pre>
    </div>
    </div>
  );
}

export default Home;
