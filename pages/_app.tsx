import "../assets/main.css";
import "../assets/chrome-bug.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "@/components/common/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head />
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
