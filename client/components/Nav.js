import React from "react";
import Link from "next/link";
import Query from "../apollo/query";
import CATEGORIES_QUERY from "../apollo/queries/categories";

export default () => {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { interessanteLinks } }) => {
        return (
          <nav>
            <ul>
              <a href="">
                <li>Seniorenraad</li>
              </a>
              <a href="">
                <li>Communicatie & info</li>
              </a>
              <a href="">
                <li>Gezondheid & zorg</li>
              </a>
              <a href="">
                <li>Infrastructuur</li>
              </a>
              <a href="">
                <li>Mobiliteit & transport</li>
              </a>
              <a href="">
                <li>Respect & inclusie</li>
              </a>
              <a href="">
                <li>Wonen</li>
              </a>
              <a href="">
                <li>Participatie</li>
              </a>
              <a href="signin">
                <li>Log in</li>
              </a>
              <a href="signup">
                <li>Registreren</li>
              </a>
            </ul>
          </nav>
        );
      }}
    </Query>
  );
};
