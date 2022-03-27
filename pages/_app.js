import "../styles/globals.css";
import { TinderProvider } from "../context/TindeContext.js";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://297nscgzqvl0.usemoralis.com:2053/server"
      appId="TU3CdJj9azGDiTRP28uhVJ29xtZefQMlTksl3FKf"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
