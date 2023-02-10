import "@/styles/globals.css";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

const titleFont = localFont({
  src: "./WorkSans-VariableFont_wght.ttf",
  weight: "450",
  style: "normal",
  variable: "--font-title",
});

const bodyFont = localFont({
  src: "./SourceSansPro-Regular.ttf",
  style: "normal",
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://flupke.archi/` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <RecoilRoot>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className={`${titleFont.variable} font-sans, ${bodyFont.variable} font-serif`}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
