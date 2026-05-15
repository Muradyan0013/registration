import { useLocation, useNavigate } from "react-router-dom";
import "./logIn.css";
import { useState } from "react";

export const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = allUsers.find(
      (user) => user.userName === userName && user.password === password,
    );

    if (foundUser) {
      alert("Success");

      navigate("/profile", {
        state: [allUsers, foundUser],
      });
    } else {
      alert("Username or password is incorrect");
    }
    console.log(location.state);
  };
  return (
    <div className="logIn">
      <form onSubmit={handleSubmit}>
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

        <button>Log In</button>
      </form>
    </div>
  );
};
