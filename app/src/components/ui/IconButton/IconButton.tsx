import style from "./IconButton.module.css";

type Props = { variant: "white" | "grey"; children: React.ReactNode };

export default function IconButton({ variant, children }: Props) {
  const className = variant === "white" ? style.white : style.grey;
  return <button className={`${style.button} ${className}`}>{children}</button>;
}
