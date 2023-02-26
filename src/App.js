import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import WordList from "./components/WordList";
import ReactGA from "react-ga";

function initializeGA() {
  ReactGA.initialize("UA-163208506-1");
  ReactGA.pageview("homePage");
}

function App() {
  initializeGA();
  const [wordText, setWordText] = useState("");

  const wordFunc = (word) => {
    setWordText(word);
  };

  return (
    <div className="App p-4">
      <Input handleInput={wordFunc} />
      <WordList wordText={wordText} />
    </div>
  );
}

export default App;
