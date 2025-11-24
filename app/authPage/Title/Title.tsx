import style from "./Title.module.css";

type Props = { children: string };

export default function Title({ children }: Props) {
  return (
    <div>
      <h1 className={style.title}>{children}</h1>
    </div>
  );
}
