import Navbar from "@/components/Navbar";
import Parkour from "@/components/Parkour";
import menuDrop from "@/recoil/menuDrop";
import Head from "next/head";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const setMenuDrop = useSetRecoilState(menuDrop);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div
        onClick={() => setMenuDrop(false)}
        className="relative top-16 flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gray-200 p-3 font-body"
      >
        <Parkour />
      </div>
    </>
  );
}
