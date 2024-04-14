import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ui";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <main>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
);

export default App;
