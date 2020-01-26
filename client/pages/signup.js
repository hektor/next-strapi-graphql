import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";

export default () => {
  const [user, setUser] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { email, username, password } = user;

  const handleInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <Layout>
      <h1>Registreren</h1>
      <p>{error}</p>
      <p>{`${username} ${email} ${password}`}</p>
      <form>
        <div>
          <label htmlFor="username">Gebruikersnaam</label>
          <input onChange={e => handleInput(e)} type="text" name="username" />
        </div>
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
          Maak account
        </button>
      </form>
    </Layout>
  );
};
