import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between text-lg px-8'>
      <div>
        <Link href='/'>
          <a>home</a>
        </Link>
      </div>
      <ul className='flex gap-4 '>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/merch'>
            <a>Merch</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
