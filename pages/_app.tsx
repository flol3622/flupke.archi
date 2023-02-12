import "@/styles/globals.css";
import { Source_Sans_Pro, Work_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

const titleFont = Work_Sans({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
  variable: "--font-title",
});

const bodyFont = Source_Sans_Pro({
  subsets: ["latin"],
  weight: "400",
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
      <main
        className={`${titleFont.variable} font-sans, ${bodyFont.variable} font-serif`}
      >
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
