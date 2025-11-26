import style from "./ErrorMessage.module.css";

type Props = { children: string };

export default function ErrorMessage({ children }: Props) {
  return <span className={style.error}>{children}</span>;
}
