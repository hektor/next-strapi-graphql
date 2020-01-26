import React from "react";
import { signout } from "../auth";

export default () => {
  return (
    <header>
      <div>logo</div>
      <button onClick={signout}>Sign out</button>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          background: #fff;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </header>
  );
};
