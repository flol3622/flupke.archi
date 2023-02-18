import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <h2 className="font-title text-lg sm:text-xl ">About me</h2>
      Hi there! Thank you for visiting my website. I&#39;m Philippe Soubrier, an
      architecture student. My website is currently under maintenance, but
      please check back soon to see my portfolio and learn more about my work.
      <br />
      In the meantime, you can find more information about me on my social media
      accounts:
      <br />
      <a
        className="mt-2 mr-3 inline-block rounded border border-black bg-white p-2"
        href="https://www.instagram.com/soubrierphilippe/"
      >
        Instagram
      </a>
      <a
        className="mt-2 mr-3 inline-block rounded border border-black bg-white p-2"
        href="https://www.linkedin.com/in/philippe-soubrier-0338b9205"
      >
        LinkedIn
      </a>
      <Link
        href="/parkour"
        className="mt-2 inline-block rounded border border-white bg-black p-2 text-white lg:hidden"
      >
        Parkour
      </Link>
    </>
  );
}
