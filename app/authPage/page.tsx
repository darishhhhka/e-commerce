"use client";

import style from "./AuthPage.module.css";
import Image from "next/image";
import SignIn from "./SingnInPage/SingInPage";
import { useState } from "react";
import img from "../../public/signInPage.png";
import img2 from "../../public/verificationPage.png";
import Verification from "./Verification/Verification";
import ResetPassword from "./ResetPassword/ResetPassword";
import SingUp from "./SingUp/SingUp";

type Props = { image: string; children: React.ReactNode };

export default function AuthPage() {
  const [page, setPage] = useState("");
  const pages = [
    { page: <SignIn />, img: "/singInPage" },
    { page: <Verification />, img: "/verificationPage.png" },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <img
          alt="auth image"
          src="/verificationPage.png"
          className={style.image}
        />
      </div>
      <div className={style.content}>
        <SingUp />
      </div>
    </div>
  );
}
