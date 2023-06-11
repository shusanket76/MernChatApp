import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const url = "http://localhost:3000/auth/signup";
    const {
      data: { token, userID, hashedPassword },
    } = await axios.post(url, {
      username,
      password,
    });
    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("userID", userID);
    cookies.set("hashedPassword", hashedPassword);

    window.location.reload();
  };

    const onSignIn = async () => {
      const url = "http://localhost:3000/auth/login";
      const {
        data: { token, userID, hashedPassword },
      } = await axios.post(url, {
        username,
        password,
      });
      cookies.set("token", token);
      cookies.set("username", username);
      cookies.set("userID", userID);
      cookies.set("hashedPassword", hashedPassword);

      window.location.reload();
    };

  return (
    <>
      <div>
        <div>
          <form>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <button type="button" onClick={handleSubmit}>
              SIGNUP
            </button>
            <button type="button" onClick={onSignIn}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
