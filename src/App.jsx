import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  useEffect(() => {
    console.log("You can see me only once!");
  }, []); // Виконується тільки на етапі монтування.

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default App;
