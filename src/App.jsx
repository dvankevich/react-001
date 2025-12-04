import "./App.css";
import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  console.log(loginId, passwordId);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;
    console.log("form.elements", form.elements);

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form className="simpleForm" onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />
      <button type="submit">Login</button>
    </form>
  );
};

const handleLogin = (userData) => {
  // Виконуємо необхідні операції з даними
  console.log(userData);
};

function App() {
  return (
    <>
      <div>
        <h1>Please login to your account!</h1>
        {/* Передаємо колбек як пропс форми */}
        <LoginForm onLogin={handleLogin} />
      </div>
    </>
  );
}

export default App;
