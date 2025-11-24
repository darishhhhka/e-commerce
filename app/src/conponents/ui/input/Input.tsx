import Image from "next/image";
import style from "./Input.module.css";
import searcLogo from "../../../../../public/search.svg";
import { Span } from "next/dist/trace";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function Input({ ...props }) {
  const typeInput = props.typeinput === "search" ? style.search : style.normal;
  const typeContainer =
    props.typeinput === "search"
      ? style.search_container
      : style.input_container;
  return (
    <div className={typeContainer}>
      {props.label && (
        <label className={style.label} htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <input
        className={`${typeInput} ${style.input}`}
        id={props.label}
        {...props}
      />
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
      {props.typeinput === "search" && (
        <Image className={style.logo} src={searcLogo} alt="search logo" />
      )}
    </div>
  );
}
