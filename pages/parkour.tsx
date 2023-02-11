import IntroBg from "@/components/IntroBg";
import IntroCard from "@/components/IntroCard";
import IntroLines from "@/components/IntroLines";
import Navbar from "@/components/Navbar";
import Parkour from "@/components/Parkour";
import ImgProfile from "@/public/images/profile.webp";
import Head from "next/head";
import Image from "next/image";
import Maintenance from "@/public/images/under-maintenance.png";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroBg />
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center p-3 font-body">
        <Parkour />
      </div>
    </>
  );
}
