"use client";

import Logo from "../../src/components/ui/Logo/Logo";
import style from "./Header.module.css";
import Menu from "../Menu/Menu";
import Input from "@/app/src/components/ui/Input/Input";
import Button from "@/app/src/components/ui/Button/Button";
import { LINKS, LINKSBUTTONS } from "./links";

export default function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <Menu links={LINKS} gap={40} />
      <Input typeinput="search" placeholder="Search" />
      <Menu links={LINKSBUTTONS} gap={12} />
    </header>
  );
}
