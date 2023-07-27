import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const generateRandomToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.match(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Please enter a password of at least 6 characters.");
    } else {
      setPasswordError("");
    }

    const token = generateRandomToken();    

    if (emailError === "" && passwordError === "") {
      localStorage.setItem('loggedInUser', JSON.stringify({ email: email, token: token }));
      // console.log(localStorage)
      navigate("/La_ferme");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="landText">
        <h1>La Ferme</h1>
        We manage your whole farm and workers, <br/>
        but also 
      </div>
      <div className="card">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            type="email"
            placeholder="Your Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>{emailError}</span>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{passwordError}</span>

          <button type="submit">Login in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
