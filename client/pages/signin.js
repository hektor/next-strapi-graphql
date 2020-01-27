import React, { useState } from "react";
import Link from "next/link";
import { signin } from "../auth";
import Layout from "../components/Layout";

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
        <label htmlFor="email">Email</label>
        <input onChange={e => handleInput(e)} type="email" name="email" />
        <label htmlFor="password">Wachtwoord</label>
        <input onChange={e => handleInput(e)} type="password" name="password" />
        <button onClick={e => handleSubmit(e)} type="submit">
          Log in
        </button>
        <p>Heb je nog geen account?</p>
        <Link href="signup">
          <a>Registreer</a>
        </Link>
      </form>
    </Layout>
  );
};
