"use client";

import style from "./AuthPage.module.css";
import Image from "next/image";
import SignInPage from "./SingnInPage/SingInPage";
import { useState } from "react";
import img from "@public/signInPage.png";
import img2 from "@public/images/signInPage.png";
import Verification from "./Verification/Verification";
import ResetPassword from "./ResetPassword/ResetPassword";
import SingUp from "./SingUp/SingUp";
import CheckEmail from "./CheckEmail/CheckEmail";
import CreateNewPassword from "./CreateNewPassword/CreateNewPasssword";

type Props = { image: string; children: React.ReactNode };

export default function AuthPage() {
  const [page, setPage] = useState("");
  const pages = [
    { page: <SignInPage />, img: "/images/singInPage.png" },
    { page: <SingUp />, img: "/images/singUp.png" },
    { page: <ResetPassword />, img: "/images/resetPasswordPage.png" },
    { page: <CheckEmail />, img: "/imgaes/checkEmailPage.png" },
    { page: <Verification />, img: "/images/verificationPage.png" },
    { page: <CreateNewPassword />, img: "/images/createNewPassword.png" },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <img
          alt="auth image"
          src="/images/signInPage.png"
          className={style.image}
        />
      </div>
      <div className={style.content}>
        <SignInPage />
      </div>
    </div>
  );
}
