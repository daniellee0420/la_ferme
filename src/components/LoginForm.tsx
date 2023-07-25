import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    if (emailError === "" && passwordError === "") {
      console.log("Email: " + email);
      console.log("Password: " + password);
      navigate("/SalaryPaymentList");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
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
  );
};

export default LoginForm;
