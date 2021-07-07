import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import CustomHead from "../components/CustomHead";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
