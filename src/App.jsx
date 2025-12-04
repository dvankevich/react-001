import "./App.css";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <h2>Search bar</h2>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
