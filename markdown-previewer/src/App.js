import "./App.css";
import React, { useState, useEffect } from "react";
import marked from "marked";

function App() {
  const [markdown, setMarkdown] = useState("");

  function updateMarkdown(markdown) {
    setMarkdown(markdown);
    console.log(markdown);
  }

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText(marked(markdown));
  }, [markdown, setDisplayText]);
  return (
    <div className="app">
      <h1 className="title">Markdown Previewer</h1>
      <div className="container">
        <div className="add-text text">
          <h2>Markdown Input</h2>
          <textarea
            name="input-text"
            className="pre-input box"
            value={markdown}
            onChange={(e) => {
              updateMarkdown(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="output-text text">
          <h2>Preview</h2>
          <p
            className="pre-out box"
            dangerouslySetInnerHTML={{ __html: displayText }}
          ></p>
        </div>
      </div>
      <footer>
        <h4>&copy; Lekhraj Studios</h4>
        <h5>Made with love for community</h5>
      </footer>
    </div>
  );
}

export default App;
