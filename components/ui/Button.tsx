import React from "react";
import Link from "next/link";
interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, link, onClick }) => {
  const commonClasses =
    "no-underline cursor-pointer bg-teal-500 border border-teal-500 rounded-md text-teal-100 py-2 px-6 text-center shadow-sm hover:bg-teal-600 active:bg-teal-600 hover:border-teal-600 active:border-teal-600";

  if (link) {
    return (
      <Link className={commonClasses} href={link} passHref>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
