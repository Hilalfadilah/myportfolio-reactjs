import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="mx-56 mt-28">
        <div className="my-8 flex items-center justify-between font-Fira">
          <div className="block space-y-1">
            <h1 className="mb-3 text-4xl text-[#e7e7e9] font-bold">
              Hi, I'm
              <span className="rounded-md p-1 ml-3 bg-[#4f6f91] text-[#e7e7e9] font-bold">
                Hilal Fadilah
              </span>
            </h1>
            <p className="text-[#e7e7e9] font-PT">
              Currently work as a frontend engineer.
            </p>
            <p className="text-[#e7e7e9] font-PT">
              You've found my personal slice of the internet. Take a look and
              enjoy.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 font-Fira">
              <a
                className="inline-flex items-center rounded px-4 py-2 font-semibold border-dotted border-2 border-[#78b6bf] text-[#78b6bf]  hover:bg-[#78b6bf]/30 hover:ring-1 hover:underline transition-all duration-150"
                href="/aboutme"
              >
                Learn About Me
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-newtab inline-flex items-center rounded px-4 py-2 font-semibold border-dotted border-2 border-[#78b6bf] text-[#78b6bf] hover:ring-1 hover:underline hover:bg-[#78b6bf]/30 transition-all duration-150"
              >
                Resume
              </a>
            </div>
          </div>
          <figure className="hidden rounded-full bg-primary-200 dark:bg-primary-600 sm:table-cell">
            <img
              alt="avatar_me"
              className="transition duration-500 scale-100 blur-0 w-[240px] h-[250px] rounded-full"
              src="/hilal-removebg.png"
            />
          </figure>
        </div>
        <div className="block space-y-3">
          <h3 className="text-2xl font-semibold text-[#e7e7e9] font-Fira">
            Current Favorite Tech Stacks
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <button aria-expanded="false">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-4xl text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
              </svg>
            </button>
            <button aria-expanded="false">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="text-4xl text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
              </svg>
            </button>
            <button aria-expanded="false">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="text-4xl text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
              </svg>
            </button>
            <button aria-expanded="false">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-4xl text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <section className="space-y-3 pt-10">
          <h3 className="py-2 text-2xl text-[#e7e7e9] font-semibold font-Fira">
            Featured Projects
          </h3>
          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 font-Fira">
            <a
              href="tmdb-movie-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab relative w-full overflow-hidden rounded-md hover:outline hover:outline-zinc-400 duration-200 ease-in hover:-translate-y-1"
            >
              <img
                className="w-full brightness-90 hover:brightness-100 transition duration-500 scale-100 blur-0"
                alt="featured-project"
                loading="lazy"
                decoding="async"
                src="/TMDB.png"
              />
              <h4 className="absolute inset-x-0 bottom-0 w-full bg-[#2b3140] bg-opacity-75 py-2 text-center text-base text-[#e7e7e9]">
                The Movie App
              </h4>
            </a>
            <a
              href="bella-springbed.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab relative w-full overflow-hidden rounded-md hover:outline hover:outline-zinc-400 duration-200 ease-in hover:-translate-y-1"
            >
              <img
                className="w-full brightness-90 hover:brightness-100 transition duration-500 scale-100 blur-0"
                alt="featured-project"
                loading="lazy"
                decoding="async"
                src="/bella.png"
              />
              <h4 className="absolute inset-x-0 bottom-0 w-full bg-[#2b3140] bg-opacity-75 py-2 text-center text-base text-[#e7e7e9]">
                Bella Furniture
              </h4>
            </a>
            <a
              href="hilalfadilah.github.io/website-kopi/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab relative w-full overflow-hidden rounded-md hover:outline hover:outline-zinc-400  duration-200 ease-in hover:-translate-y-1"
            >
              <img
                className="w-full brightness-90 hover:brightness-100 transition duration-500 scale-100 blur-0"
                alt="featured-project"
                loading="lazy"
                decoding="async"
                src="/website-kopi.png"
              />
              <h4 className="absolute inset-x-0 bottom-0 w-full bg-[#2b3140] bg-opacity-75 py-2 text-center text-base text-[#e7e7e9]">
                Website Coffe
              </h4>
            </a>
            <a
              href="hilalfadilah.github.io/Project-NFT/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab relative w-full overflow-hidden rounded-md hover:outline hover:outline-zinc-400 dark:hover:outline-zinc-100 duration-200 ease-in hover:-translate-y-1"
            >
              <img
                className="w-full brightness-90 hover:brightness-100 transition duration-500 scale-100 blur-0"
                alt="featured-project"
                loading="lazy"
                decoding="async"
                src="/nft-website.png"
              />
              <h4 className="absolute inset-x-0 bottom-0 w-full bg-[#2b3140] bg-opacity-75 py-2 text-center text-base text-[#e7e7e9]">
                NFT Website
              </h4>
            </a>
            <a
              href="e-commorce-reactjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab relative w-full overflow-hidden rounded-md hover:outline hover:outline-zinc-400 dark:hover:outline-zinc-100 duration-200 ease-in hover:-translate-y-1"
            >
              <img
                className="w-full brightness-90 hover:brightness-100 transition duration-500 scale-100 blur-0"
                alt="featured-project"
                loading="lazy"
                decoding="async"
                src="/E-commerce.png"
              />
              <h4 className="absolute inset-x-0 bottom-0 w-full bg-[#2b3140] bg-opacity-75 py-2 text-center text-base text-[#e7e7e9]">
                Hilal Store
              </h4>
            </a>
          </div>
          <a
            className="inline-flex items-center rounded px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-[#78b6bf] shadow-sm transition-colors duration-75 text-[#78b6bf] border border-[#78b6bf] hover:bg-[#78b6bf]/50 hover:underline active:bg-[#78b6bf] disabled:bg-[#78b6bf] disabled:cursor-not-allowed mt-4 w-full justify-center font-Fira"
            href="/project"
          >
            See More Projects
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
