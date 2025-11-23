"use client";

import style from "./AuthPage.module.css";
import Image from "next/image";
import SignIn from "./SingnIn/SingIn";
import { useState } from "react";
import img from "../../public/signInPage.png";

type Props = { image: string; children: React.ReactNode };

export default function AuthPage() {
  const [page, setPage] = useState("");
  const pages = [{ page: <SignIn />, img: "/singInPage" }];
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image alt="auth image" src={img} className={style.image} />
      </div>
      <div className={style.content}>
        <SignIn />
      </div>
    </div>
  );
}
