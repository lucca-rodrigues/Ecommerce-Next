import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moda Feminina, Masculina, Infantil e Perfumes - Renner</title>
        <meta
          name="description"
          content="Moda Feminina, Masculina, Infantil e Perfumes - Renner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
