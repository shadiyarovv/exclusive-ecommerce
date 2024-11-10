import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  linkLabel: string;
  link: string;
  className?: string;
}

const LinkButton = ({ linkLabel, link, className }: LinkButtonProps) => {
  return (
    <Link
      href={link}
      className={`py-3 px-14 rounded-md bg-primary text-white text-center capitalize w-fit ${className}`}
    >
      {linkLabel}
    </Link>
  );
};

export default LinkButton;
