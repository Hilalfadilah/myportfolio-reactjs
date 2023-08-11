import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-4xl border-t border-white text-[#e7e7e9] mt-10 pb-32 pt-12 md:pb-12 px-4 lg:px-2 space-y-8 font-Fira">
        <div className="sm:flex sm:flex-wrap sm:items-center grid grid-cols-2 gap-2 mx-2 md:m-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-newtab text-sm font-semibold hover:underline md:text-base p-1 hover:rounded-md hover:bg-[#78b6bf]/30"
          >
            Starter Template
          </a>
          <a
            href="https://docs.yehezgun.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-newtab text-sm font-semibold hover:underline md:text-base p-1 hover:rounded-md hover:bg-[#78b6bf]/30"
          >
            Personal Docs
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-newtab text-sm font-semibold hover:underline md:text-base p-1 hover:rounded-md hover:bg-[#78b6bf]/30"
          >
            Analytics
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-newtab text-sm font-semibold hover:underline md:text-base p-1 hover:rounded-md hover:bg-[#78b6bf]/30"
          >
            Status
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-newtab text-sm font-semibold hover:underline md:text-base p-1 hover:rounded-md hover:bg-[#78b6bf]/30"
          >
            Showwcase
          </a>
        </div>
        <a
          href="/"
          rel="noopener noreferrer"
          className="cursor-newtab inline-flex items-center ml-2 font-Fira text-sm md:ml-0 md:text-base hover:bg-[#58a4b0] hover:border-none hover:rounded-md hover:text-slate-900 transition-all duration-150"
        >
          2023 | Hilal Fadilah
        </a>
      </footer>
    </>
  );
};

export default Footer;
