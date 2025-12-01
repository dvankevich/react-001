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

const ClickCounterSync = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
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

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
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
      <div>
        <h2>Synchronized Click Counter</h2>
        <ClickCounterSync value={clicks} onUpdate={handleClick} />
        <ClickCounterSync value={clicks} onUpdate={handleClick} />
      </div>
      <div>
        <h2>State Object Update</h2>
        <p>
          x: {values.x}, y: {values.y}
        </p>

        <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
      </div>
    </>
  );
}

export default App;
