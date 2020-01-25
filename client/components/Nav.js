import React, { useState } from "react";
import Link from "next/link";
import Query from "../apollo/query";
import CATEGORIES_QUERY from "../apollo/queries/categories";

export default () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button className="toggle" onClick={() => setToggle(!toggle)}>
        {toggle ? "close" : "menu"}
      </button>
      <nav>
        <Link href="/">
          <a>Ouderenraad</a>
        </Link>
        <Link href="">
          <a>Communicatie & info</a>
        </Link>
        <Link href="">
          <a>Gezondheid & zorg</a>
        </Link>
        <Link href="">
          <a>Infrastructuur</a>
        </Link>
        <Link href="">
          <a>Mobiliteit & transport</a>
        </Link>
        <Link href="">
          <a>Respect & inclusie</a>
        </Link>
        <Link href="">
          <a>Wonen</a>
        </Link>
        <Link href="">
          <a>Participatie</a>
        </Link>
        <Link href="signin">
          <a>Log in</a>
        </Link>
        <Link href="signup">
          <a>Registreren</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          position: absolute;
          bottom: 0;
          width: 100vw;
          height: 50vh;
          display: ${toggle ? "flex" : "none"};
          flex-direction: column;
          overflow-y: auto;
          background: #fff;
        }

        a {
          flex: 1;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .toggle {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
        }

        @media (min-width: 768px) {
          nav {
            position: static;
            width: auto;
            height: auto;
            display: flex;
          }

          .toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
