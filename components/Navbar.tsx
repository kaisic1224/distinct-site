import React, { VoidFunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: VoidFunctionComponent = () => {
  const router = useRouter();
  return (
    <nav className='flex justify-between text-lg px-8 mx-auto h-16 items-center'>
      <div>
        <Link href='/'>
          <a
            className={`font-medium hover:text-blue-400 ${
              router.pathname === "/" ? "text-blue-400" : ""
            }`}
          >
            d1st1nct_kicks
          </a>
        </Link>
      </div>
      <ul className='flex gap-4'>
        <li>
          <Link href='/contact'>
            <a
              className={`font-medium hover:text-blue-400 ${
                router.pathname === "/contact" ? "text-blue-400" : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href='/apparel'>
            <a
              className={`font-medium hover:text-blue-400 ${
                router.pathname === "/apparel" ? "text-blue-400" : ""
              }`}
            >
              Apparel
            </a>
          </Link>
        </li>
        <li>
          <Link href='/signup'>
            <a
              className={`font-medium hover:text-blue-400 ${
                router.pathname === "/signup" ? "text-blue-400" : ""
              }`}
            >
              Register
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
