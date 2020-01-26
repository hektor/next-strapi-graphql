import React, { useState } from "react";
import Layout from "../components/Layout";
import { signin } from "../auth";

export default () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    signin(user);
  };

  return (
    <Layout>
      <h1>Inloggen</h1>
      <p>{error}</p>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={e => handleInput(e)} type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Wachtwoord</label>
          <input
            onChange={e => handleInput(e)}
            type="password"
            name="password"
          />
        </div>
        <button onClick={e => handleSubmit(e)} type="submit">
          Log in
        </button>
      </form>
    </Layout>
  );
};
