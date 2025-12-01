import CardDownload from "../CardDownload/CardDownload";
import List from "../List/List";
import style from "./Footer.module.css";
import { COMPANY, LOCATION, MOREINFO, NEEDHELP, BUTTONS } from "./lists";
import Line from "@/app/src/components/ui/Line/Line";
import Title from "@/app/src/components/ui/Title/Title";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.lists}>
          <List list={NEEDHELP} />
          <List list={COMPANY} />
          <List list={MOREINFO} />
          <List list={LOCATION} />
        </div>
        <div className={style.second_row}>
          <div className={style.buttons}>
            {BUTTONS.map((b) => (
              <Link className={style.link} key={b.href} href={b.href}>
                {b.content}
              </Link>
            ))}
          </div>
          <div className={style.download}>
            <Title color="white" size="normal">
              Download The App
            </Title>
            <div className={style.download_card}>
              <CardDownload
                aplication_name="Google Play"
                aplication_subtitle="android app on"
                img="/icons/googlePlay.svg"
              />
              <CardDownload
                aplication_name="App Store"
                aplication_subtitle="Available on the"
                img="/icons/phone.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
      <div className={style.popular_categories}>
        <Title color="white" size="normal">
          Popular Categories
        </Title>
        <img src="/icons/arrowWhiteIcon.svg" alt="" />
      </div>
      <Line />
      <div className={style.footer_footer}>
        <span>
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
