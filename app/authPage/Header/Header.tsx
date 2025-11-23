import Logo from "@/app/src/conponents/ui/logo/Logo";
import style from "./Header.module.css";
import Input from "@/app/src/conponents/ui/input/Input";
import Button from "@/app/src/conponents/ui/button/Button";
import Line from "@/app/src/conponents/ui/line/Line";
import Select from "@/app/src/conponents/ui/select/Select";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.content_part}>
          <Logo />
          <Input placeholder="Search" typeinput="search" />
        </div>
        <div className={style.content_part}>
          <Select />
          <Button type="fullfill" text="Login" />
          <Button type="outline" text="Sing up" />
        </div>
      </div>
      <Line />
    </header>
  );
}
