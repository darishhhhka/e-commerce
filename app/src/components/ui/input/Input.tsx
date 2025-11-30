"use client";

import Image from "next/image";
import style from "./Input.module.css";
import searcLogo from "@public/icons/search.svg";
import hideView from "@public/icons/hideView.svg";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { HTMLAttributes, useRef } from "react";

type Props = {
  typeinput: "search" | undefined;
  label: string | undefined;
  error: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }) {
  const input = useRef<HTMLInputElement | null>(null);

  const changeVisibility = () => {
    console.log(input);
    if (!input.current) return;
    if (input.current?.type === "password") {
      input.current.type = "text";
      return;
    } else {
      input.current.type = "password";
    }
  };

  const border =
    props.typeinput === "search" ? style.search : style.input_border;
  return (
    <div className={style.input_container}>
      {props.label && (
        <label className={style.label} htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <div className={`${style.input_wrap} ${border}`}>
        {props.typeinput === "search" && (
          <Image className={style.logo} src={searcLogo} alt="search logo" />
        )}
        <input
          className={`${style.input}`}
          id={props.label}
          {...props}
          ref={input}
        />
        {props.type === "password" && (
          <Image
            onClick={changeVisibility}
            className={style.hideView}
            src={hideView}
            alt="hide view logo"
          />
        )}
      </div>
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </div>
  );
}
