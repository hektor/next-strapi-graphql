import React from "react";
import { Search } from "react-feather";

export default () => {
  return (
    <div className="search">
      <Search strokeWidth={1} />
      <input type="text" placeholder="Zoek" />
      <style jsx>{`
        .search {
          display: flex;
          align-items: center;
          color: #aaa;
          border-bottom: 1px solid #eee;
        }

        input {
          padding: 0.5rem;
          border: none;
          color: inherit;
          max-width: 10rem;
        }
      `}</style>
    </div>
  );
};
