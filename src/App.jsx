import "./App.css";
import { useState } from "react";

function Product() {
  return (
    <div>
      <h2>Cookies</h2>
      <p>Price: 999 credits</p>
    </div>
  );
}

const MyButton = () => {
  return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
};

const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (evt) => {
    console.log(evt);
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
      setClicks(clicks + 1);
    };

    return <button onClick={handleClick}>Current: {clicks}</button>;
  };

  return (
    <>
      <div>
        <h1>Products</h1>

        <Product />
        <MyButton />
        <button onClick={() => alert("You clicked me!")}>
          Click me again!!!
        </button>
      </div>
      <div>
        <button onClick={handleClick}>First button with handleClick</button>
        <button onClick={(evt) => console.log(evt)}>Second button</button>
      </div>
      <div>
        <CustomButton message="Playing music!">Play some music</CustomButton>
        <CustomButton message="Uploading your data!">Upload data</CustomButton>
      </div>
      <div>
        <h2>Click counter</h2>
        <button onClick={handleClick}>Current: {clicks}</button>
      </div>
      <div>
        <h2>Toggle section</h2>
        <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && <p>Now you can see me!</p>}
      </div>
      <div>
        <h2>Independent Click Counter</h2>
        <ClickCounter />
        <ClickCounter />
      </div>
    </>
  );
}

export default App;
