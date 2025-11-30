import Link from "next/link";
import style from "./Menu.module.css";
import React from "react";

type Link = {
  content: React.ReactNode | string;
  href: string;
};

type Props = {
  links: Link[];
  gap: number;
};

export default function Menu({ links, gap }: Props) {
  const changeColor = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLLinkElement;
    if (!target.className.includes("active")) {
      target.className += ` ${style.active}`;
    } else {
      target.className = style.link;
    }
    console.log(target.className);

    console.log("change colot");
  };

  const gapStyle = gap === 12 ? style.small_gap : style.big_gap;

  return (
    <nav className={`${style.menu} ${gapStyle}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          //   onClick={changeColor}
          className={`${style.link}`}
          href={link.href}
        >
          {link.content}
        </Link>
      ))}
    </nav>
  );
}
