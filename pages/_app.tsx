import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (`https://flupke.archi/` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <RecoilRoot>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
