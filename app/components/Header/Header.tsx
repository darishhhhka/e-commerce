"use client";

import Logo from "../../src/components/ui/logo/Logo";
import style from "./Header.module.css";
import Menu from "../Menu/Menu";
import Input from "@/app/src/components/ui/input/Input";
import Button from "@/app/src/components/ui/button/Button";
import { LINKS, LINKSBUTTONS } from "../Menu/links";

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
