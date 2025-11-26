import React from "react";
import style from "./Button.module.css";

type Props = {
  variant: "outline" | "fullfill";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  const typeButton =
    props.variant === "outline" ? style.outline : style.fullfill;
  return (
    <button className={`${typeButton} ${style.button}`} {...props}>
      {children}
    </button>
  );
}
