import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setSignUp] = useState(true);

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
            <label htmlFor="password">USERNAME</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            {isSignup && <button>SIGNUP</button>}
            {isSignup || <button>SIGN IN</button>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
