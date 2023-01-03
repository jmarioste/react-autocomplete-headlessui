import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
const inter = Inter();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
