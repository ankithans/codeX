import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="h-16">
        <nav className="flex justify-between py-1 items-center">
          <p className="text-2xl font-bold text-grey-800">CodeX</p>
          <div className="flex">
            <a
              href="#"
              className="rounded bg-blue-400 round-lg hover:bg-blue-700 text-white py-2 px-2"
            >
              Share Your Code
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
