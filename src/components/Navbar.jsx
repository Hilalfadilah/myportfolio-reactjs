import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full transition duration-300 translate-y-0 bg-[#424a5a] font-primary">
      <div className="h-1.5 bg-gradient-to-r from-lightsteel-600 via-charcoal-300 to-errieblack-300"></div>
      <nav className="layout flex items-center justify-between mx-auto h-14 max-w-4xl px-4 py-0.5 lg:px-2">
        <a className="font-bold text-[#e7e7e9]" href="/">
          <h5>scenix.com</h5>
        </a>
        <div className="flex items-center justify-end gap-2">
          <a
            className="text-[#e7e7e9] hidden hover:underline sm:inline-flex p-1 hover:rounded-md hover:bg-[#78b6bf]/70 rounded-lg bg-[#78b6bf] font-black underline"
            href="/"
          >
            Home
          </a>
          <a
            className="text-[#e7e7e9] hidden font-semibold hover:underline sm:inline-flex p-1 hover:rounded-md hover:bg-primary-400 dark:hover:bg-primary-600"
            href="/project"
          >
            Projects
          </a>
          <a
            className="text-[#e7e7e9] hidden font-semibold hover:underline sm:inline-flex p-1 hover:rounded-md hover:bg-primary-400 dark:hover:bg-primary-600"
            href="/aboutme"
          >
            About Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
