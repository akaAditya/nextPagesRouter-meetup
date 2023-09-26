import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
