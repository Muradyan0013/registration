import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";
const users = JSON.parse(localStorage.getItem("users")) || [];

export const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      userName: userName,
      password: password,
    };
    if (email && userName && password) {
      alert("Success");
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      navigate("/login", {
        state: users,
      });
    } else {
      alert("All inputs must be filled");
    }
  };
  return (
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          type="email"
        />
        <label>Username</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value.toLowerCase())}
          type="text"
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};
