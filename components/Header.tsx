import React from "react";

function Header() {
  return (
    <nav className="fixed bg-transparent z-100 w-full py-4 flex justify-center items-center">
      <ul className="flex gap-2 bg-black text-white p-3 border rounded-full">
        <li className="px-4 py-2 cursor-pointer">
          <a href="#Home">Home</a>
        </li>
        <li className="px-4 py-2 cursor-pointer">
          <a href="#Leadership">Leadership</a>
        </li>
        <li className="px-4 py-2 cursor-pointer">
          <a href="#Vision">Vision</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
