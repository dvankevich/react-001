import "./App.css";
import { useState, useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    // Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval ID: ${intervalId}, Time: ${Date.now()}`);
    }, 2000);

    return () => {
      // Очищаємо інтервал за його ідентифікатором
      console.log(`clean Interval with ID: ${intervalId}`);
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Оголошуємо ефект
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  }, [clicks]);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []); // Виконується тільки на етапі монтування.

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Modal />}
      </div>
      <div>
        <button onClick={() => setFirst(first + 1)}>First: {first}</button>
        <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      </div>
    </>
  );
};

export default App;
