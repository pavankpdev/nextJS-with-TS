// Global styles
import "../styles/globals.css";

// Layouts
import Layout from "../Layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
