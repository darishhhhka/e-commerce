import React from "react";
import Header from "./Header/Header";
import style from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.children}>{children}</div>
    </div>
  );
}
