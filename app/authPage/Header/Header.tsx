import Logo from "../../src/components/ui/logo/Logo";
import style from "./Header.module.css";
import Input from "../../src/components/ui/input/Input";
import Button from "../../src/components/ui/button/Button";
import Line from "../../src/components/ui/line/Line";
import Select from "../../src/components/ui/select/Select";

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
          <Button variant="fullfill">Login</Button>
          <Button variant="outline">Sing up</Button>
        </div>
      </div>
      <Line />
    </header>
  );
}
