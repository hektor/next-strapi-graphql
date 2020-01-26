import React from "react";
import nextCookie from "next-cookies";
import { withAuthSync } from "../auth";

import Layout from "../components/Layout";
import DocumentsList from "../components/Documents";

const Documents = props => (
  <Layout>
    <h1>Documenten</h1>
    <DocumentsList />
  </Layout>
);

Documents.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  return token;
};

export default withAuthSync(Documents);
