import React from "react";
import { BsCodeSlash } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="relative select-none bg-gray-700 lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <BsCodeSlash
          size="45"
          className="pt-2 pl-4 text-gray-100 font-semibold"
        />
        <a
          href="#"
          className="flex-no-grow mt-1 font-bold text-2xl flex-no-shrink relative py-4 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          CodeX
        </a>
      </div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <div className="mx-32 my-1 md:mx-10 md:my-2  rounded-md  bg-indigo-400">
            <button
              href="#"
              className="flex-no-grow flex-no-shrink relative py-2 px-10 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
