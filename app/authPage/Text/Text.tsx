import style from "./Text.module.css";

type Props = { children: React.ReactNode };

export default function Text({ children }: Props) {
  return <div className={style.text}>{children}</div>;
}
