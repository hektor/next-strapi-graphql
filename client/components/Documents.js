import React from "react";
import Link from "next/link";
import Query from "../apollo/query";
import DOCUMENTS_QUERY from "../apollo/queries/documents";
import { formatDate } from "../utils/date";

export default () => (
  <div className="card-group">
    <Query query={DOCUMENTS_QUERY} id={null}>
      {({ data: { documents } }) =>
        documents.map(({ id, Titel, Beschrijving, updated_at }) => (
          <Link key={id} href={{ pathname: "document", query: { id } }}>
            <div className="card">
              <span>{Titel}</span>
              <span>{Beschrijving}</span>
              <span>{formatDate(updated_at)}</span>
            </div>
          </Link>
        ))
      }
    </Query>
    <style jsx>{`
      .card-group {
        display: flex;
        flex-direction: column;
      }

      .card {
        display: flex;
        padding: 0.5rem;
        cursor: pointer;
      }

      .card > * {
        flex: 1;
      }
    `}</style>
  </div>
);
