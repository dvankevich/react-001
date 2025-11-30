import "./App.css";

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

function App() {
  const handleClick = (evt) => {
    console.log(evt);
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
        <button onClick={handleClick}>First button</button>
        <button onClick={(evt) => console.log(evt)}>Second button</button>
      </div>
    </>
  );
}

export default App;
