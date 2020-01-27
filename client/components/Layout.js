import Head from "next/head";
import Link from "next/link";

import globalStyles from "../styles/global.js";

import Header from "./Header";
import Nav from "./Nav";

export default ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="page-container">
        <Nav />
        <main className="content">{children}</main>
      </div>
      <style global>{globalStyles}</style>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #eee;
        }

        .container,
        .page-container {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }

        .content {
          flex: 1 1 auto;
          order: -1;
          display: flex;
          flex-direction: column;
          margin: 1rem;
          padding: 1rem;
          background: #fff;
          border-radius: var(--border-radius);
        }

        @media (min-width: 768px) {
          .page-container {
            flex-direction: row;
          }

          .content {
            order: 1;
          }
        }
      `}</style>
    </div>
  );
};
