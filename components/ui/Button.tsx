import React from "react";
import Link from "next/link";
import style from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <a className={style.btn}>{children}</a>
    </Link>
  );
};

export default Button;
