import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <h1 className="text-green-900">Styling green</h1>
      </div>
    </>
  );
}
