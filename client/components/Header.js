import React from "react";
import { signout } from "../auth";
import { Search } from "react-feather";
import cookie from "js-cookie";

export default () => {
  return (
    <header>
      <div>
        <div>logo</div>
      </div>
      <div>
        <Search />
        <input type="text" placeholder="search" />
      </div>
      <div>
        <button>Noodnummers</button>
        {cookie.get("token") && <button onClick={signout}>Log uit</button>}
      </div>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          background: #fff;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </header>
  );
};
