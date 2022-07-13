import loginimg from "../../assets/meal2.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img src={loginimg} alt="" />
        <h1>{"<ED8EN/>"}RECIPE</h1>
        <input
          type="text"
          name="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="USERNAME"
        />
        <input
          type="password"
          name="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
          required
        />
        <button type="submit">LOGİN</button>
      </form>
    </div>
  );
};

export default Login;
