import React from "react";
import Head from "next/head";
import Link from "next/link";

import Nav from "./Nav";

export default ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};
