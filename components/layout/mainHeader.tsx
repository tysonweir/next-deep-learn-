import React from "react";
import Link from "next/link";

const MainHeader: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-baseline p-4 md:p-10 bg-gray-800 h-20">
      <div className="text-lg md:text-4xl flex justify-center items-center text-[#94fdfd] h-full">
        <Link href="/" className="no-underline text-[#94fdfd]">
          LOGO TEXT
        </Link>
      </div>
      <nav>
        <ul className="text-[#74dacc] text-base md:text-xl">
          <li>
            <Link href="/events" className="no-underline text-[#74dacc]">
              Browse All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
